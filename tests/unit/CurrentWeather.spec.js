import { shallowMount } from '@vue/test-utils';
import CurrentWeather from '@/components/CurrentWeather.vue';
import axios from 'axios';

// Mock the axios library
jest.mock('axios');

// Spy the console Error
global.console.error = jest.fn();

describe('Implementation test for CurrentWeather.vue with Successful HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    const responseGet = { data: {} };
    responseGet.data['current-weather'] = {
      weather: [
        {
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      main: {
        temp: 19.24,
        feels_like: 14.61,
        temp_min: 16,
        temp_max: 21,
        pressure: 1028,
        humidity: 21,
      },
      wind: {
        speed: 3.1,
      },
      clouds: {
        all: 5,
      },
      name: 'Mexico City',
      cod: 200,
    };

    axios.get.mockResolvedValue(responseGet);

    const $auth = {
      getTokenSilently() {
        return 'fake-token';
      },
    };

    wrapper = shallowMount(CurrentWeather, {
      mocks: {
        $auth,
      },
    });
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('does load the Exchange Rates data when a successful HTTP GET occurs', () => {
    expect(wrapper.name()).toMatch('CurrentWeather');
    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(axios.get).toBeCalledWith(
      expect.stringMatching('/current-weather'), {
        headers: { Authorization: 'Bearer fake-token' },
      },
    );


    // Check that the weather data is properlyset
    expect(wrapper.vm.weather.weather[0].icon).toMatch('01n');
    expect(wrapper.vm.weather.main.temp).toEqual(19.24);
    expect(wrapper.vm.weather.main.humidity).toEqual(21);
    expect(wrapper.vm.weather.wind.speed).toEqual(3.1);

    // Check that temp, humidity and wind speed data are displayed
    expect(wrapper.findAll('li').at(0).text()).toMatch('Humidity: 21%');
    expect(wrapper.findAll('li').at(1).text()).toMatch('Wind speed: 3.1 km/h');
  });
});

describe('Implementation Test for ExchangeRates.vue with Failed HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    axios.get.mockRejectedValue(new Error('BAD REQUEST'));

    const $auth = {
      getTokenSilently() {
        return 'fake-token';
      },
    };

    wrapper = shallowMount(CurrentWeather, {
      mocks: {
        $auth,
      },
    });
  });

  it('does not load the current exchange rates data when failed HTTP GET occurs', () => {
    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(axios.get).toBeCalledWith(
      expect.stringMatching('/current-weather'), {
        headers: { Authorization: 'Bearer fake-token' },
      },
    );

    // Check that there is no weather data loaded when GET Request fails
    expect(wrapper.vm.weather.weather[0].icon).toMatch('');
    expect(wrapper.vm.weather.main.temp).toEqual(0.0);
    expect(wrapper.vm.weather.main.humidity).toEqual(0);
    expect(wrapper.vm.weather.wind.speed).toEqual(0.0);

    // Check that temp, humidity and wind speed data are not displayed
    expect(wrapper.findAll('li').at(0).text()).toMatch('Humidity: 0%');
    expect(wrapper.findAll('li').at(1).text()).toMatch('Wind speed: 0 km/h');

    expect(global.console.error).toHaveBeenCalledWith('BAD REQUEST');
  });
});
