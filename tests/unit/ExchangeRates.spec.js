import { shallowMount } from '@vue/test-utils';
import ExchangeRates from '@/components/ExchangeRates.vue';
import axios from 'axios';

// Mock the axios library
jest.mock('axios');

// Spy the console Error
global.console.error = jest.fn();

describe('Implementation test for ExchangeRates.vue with Successful HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    const responseGet = { data: {} };
    responseGet.data['historical-currency-rates'] = {
      rates: {},
      start_at: '2020-02-17',
      base: 'USD',
      end_at: '2020-02-22',
    };

    responseGet.data['historical-currency-rates'].rates['2020-02-17'] = { MXN: 18.5734194739 };
    responseGet.data['historical-currency-rates'].rates['2020-02-18'] = { MXN: 18.638683432 };
    responseGet.data['historical-currency-rates'].rates['2020-02-19'] = { MXN: 18.5824074074 };
    responseGet.data['historical-currency-rates'].rates['2020-02-20'] = { MXN: 18.6918443003 };
    responseGet.data['historical-currency-rates'].rates['2020-02-21'] = { MXN: 18.9966669753 };

    axios.get.mockResolvedValue(responseGet);

    wrapper = shallowMount(ExchangeRates);
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('does load the Exchange Rates data when a successful HTTP GET occurs', () => {
    expect(wrapper.name()).toMatch('ExchangeRates');
    expect(axios.get).toBeCalledWith(expect.stringMatching('/historical-currency-rates'));

    // Check the response object is properly set
    expect(wrapper.vm.response['2020-02-17'].MXN).toEqual(18.5734194739);
    expect(wrapper.vm.response['2020-02-18'].MXN).toEqual(18.638683432);
    expect(wrapper.vm.response['2020-02-19'].MXN).toEqual(18.5824074074);
    expect(wrapper.vm.response['2020-02-20'].MXN).toEqual(18.6918443003);
    expect(wrapper.vm.response['2020-02-21'].MXN).toEqual(18.9966669753);

    // Check the chartOptions data is properly set
    // Check the length of the categories array
    expect(wrapper.vm.chartOptions.xAxis.categories.length).toEqual(5);
    // Check if the array has the first and last value
    expect(wrapper.vm.chartOptions.xAxis.categories).toContain('2020-02-17');
    expect(wrapper.vm.chartOptions.xAxis.categories).toContain('2020-02-21');

    // Check the length of the data array
    expect(wrapper.vm.chartOptions.series[0].data.length).toEqual(5);
    // Check if the array has the first and the last value
    expect(wrapper.vm.chartOptions.series[0].data).toContain(18.57);
    expect(wrapper.vm.chartOptions.series[0].data).toContain(19.00);
  });
});

describe('Implementation Test for ExchangeRates.vue with Failed HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    axios.get.mockRejectedValue(new Error('BAD REQUEST'));

    wrapper = shallowMount(ExchangeRates);
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('does not load the current exchange rates data when failed HTTP GET occurs', () => {
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(expect.stringMatching('/historical-currency-rates'));

    // The response object must be empty
    expect(wrapper.vm.response).toEqual(expect.not.objectContaining({ '2020-02-17': { MXN: 18.5734194739 } }));
    expect(wrapper.vm.response).toEqual(expect.not.objectContaining({ '2020-02-21': { MXN: 18.9966669753 } }));
    expect(wrapper.vm.response).toMatchObject({});

    // The length of the categories array must be equal to zero
    expect(wrapper.vm.chartOptions.xAxis.categories.length).toEqual(0);

    // The length of the data array must be equal to zero
    expect(wrapper.vm.chartOptions.series[0].data.length).toEqual(0);

    expect(global.console.error).toHaveBeenCalledTimes(1);
    expect(global.console.error).toHaveBeenCalledWith('BAD REQUEST');
  });
});
