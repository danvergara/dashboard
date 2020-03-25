import { shallowMount } from '@vue/test-utils';
import CurrentExchange from '@/components/CurrentExchange.vue';
import axios from 'axios';

// Mock the axios library
jest.mock('axios');

// Spy the consle log
global.console.error = jest.fn();

describe('Implementation Test for CurrentExchange.vue with Successful HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    const responseGet = { data: {} };
    responseGet.data['currency-exchange'] = {
      rates: {
        MXN: 18.9966669753,
      },
      base: 'USD',
      date: '2020-02-21',
    };

    axios.get.mockResolvedValue(responseGet);

    wrapper = shallowMount(CurrentExchange);
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('does load the Current Exchange data when a successful HTTP GET occurs', () => {
    expect(wrapper.name()).toMatch('CurrentExchange');
    expect(axios.get).toBeCalledWith(expect.stringMatching('/currency-exchange'));

    // Check that 3 fields of data are properly set
    expect(wrapper.vm.currency.rates.MXN).toEqual(18.9966669753);
    expect(wrapper.vm.currency.base).toMatch('USD');
    expect(wrapper.vm.currency.date).toMatch('2020-02-21');

    expect(wrapper.findAll('h2').at(0).text()).toMatch('19.00 mexican peso');
    expect(wrapper.findAll('p').at(0).text()).toMatch('Fri Feb 21 2020');
  });
});

describe('Implementation Test for CurrentExchange.vue with Failed HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    axios.get.mockRejectedValue(new Error('BAD REQUEST'));

    wrapper = shallowMount(CurrentExchange);
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('does not load the current exchange data when a failed HTTP GET occurs', () => {
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(expect.stringMatching('/currency-exchange'));

    expect(wrapper.vm.currency.rates.MXN).toEqual(0.0);
    expect(wrapper.vm.currency.base).toMatch('');
    expect(wrapper.vm.currency.date).toMatch('');

    expect(global.console.error).toHaveBeenCalledTimes(1);
    expect(global.console.error).toHaveBeenCalledWith('BAD REQUEST');
  });
});
