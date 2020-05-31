import { shallowMount } from '@vue/test-utils';
import WeatherForecast from '@/components/WeatherForecast.vue';
import axios from 'axios';

// Mock the axios library
jest.mock('axios');

// Spy the console Error
global.console.error = jest.fn();

describe('Implementation test for WeatheForecast.vue with Successful HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    const responseGet = { data: {} };
    responseGet.data['weather-forecast'] = {
      list: [
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 15.4,
            feels_like: 13.94,
            temp_min: 14.91,
            temp_max: 15.4,
            pressure: 1019,
            humidity: 53,
          },
          wind: {
            speed: 0.73,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-24 09:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 13.82,
            feels_like: 12.21,
            temp_min: 13.45,
            temp_max: 13.82,
            pressure: 1019,
            humidity: 63,
          },
          wind: {
            speed: 1.27,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-24 12:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 19.86,
            feels_like: 18.24,
            temp_min: 19.62,
            temp_max: 19.86,
            pressure: 1020,
            humidity: 45,
          },
          wind: {
            speed: 1.5,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-24 15:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 25.77,
            feels_like: 23.14,
            temp_min: 25.65,
            temp_max: 25.77,
            pressure: 1016,
            humidity: 29,
          },
          wind: {
            speed: 2.56,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-24 18:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 26.91,
            feels_like: 23.82,
            temp_min: 26.91,
            temp_max: 26.91,
            pressure: 1012,
            humidity: 28,
          },
          wind: {
            speed: 3.37,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-24 21:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 22.77,
            feels_like: 21.44,
            temp_min: 22.77,
            temp_max: 22.77,
            pressure: 1011,
            humidity: 40,
          },
          wind: {
            speed: 1.4,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-25 00:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 19.09,
            feels_like: 16.88,
            temp_min: 19.09,
            temp_max: 19.09,
            pressure: 1016,
            humidity: 49,
          },
          wind: {
            speed: 2.53,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-25 03:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 18.1,
            feels_like: 16.03,
            temp_min: 18.1,
            temp_max: 18.1,
            pressure: 1017,
            humidity: 47,
          },
          wind: {
            speed: 1.83,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-25 06:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 16.25,
            feels_like: 14.33,
            temp_min: 16.25,
            temp_max: 16.25,
            pressure: 1016,
            humidity: 50,
          },
          wind: {
            speed: 1.37,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-25 09:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 14.95,
            feels_like: 12.42,
            temp_min: 14.95,
            temp_max: 14.95,
            pressure: 1016,
            humidity: 48,
          },
          wind: {
            speed: 1.74,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-25 12:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 21.55,
            feels_like: 19.73,
            temp_min: 21.55,
            temp_max: 21.55,
            pressure: 1017,
            humidity: 34,
          },
          wind: {
            speed: 1,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-25 15:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 25.55,
            feels_like: 22.92,
            temp_min: 25.55,
            temp_max: 25.55,
            pressure: 1014,
            humidity: 32,
          },
          wind: {
            speed: 2.96,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-25 18:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 27.46,
            feels_like: 24.65,
            temp_min: 27.46,
            temp_max: 27.46,
            pressure: 1010,
            humidity: 28,
          },
          wind: {
            speed: 3.12,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-25 21:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 24.6,
            feels_like: 22.82,
            temp_min: 24.6,
            temp_max: 24.6,
            pressure: 1009,
            humidity: 33,
          },
          wind: {
            speed: 1.63,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-26 00:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 19.74,
            feels_like: 16.98,
            temp_min: 19.74,
            temp_max: 19.74,
            pressure: 1014,
            humidity: 41,
          },
          wind: {
            speed: 2.66,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-26 03:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 18.2,
            feels_like: 15.71,
            temp_min: 18.2,
            temp_max: 18.2,
            pressure: 1016,
            humidity: 30,
          },
          wind: {
            speed: 0.79,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-26 06:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 15.75,
            feels_like: 12.12,
            temp_min: 15.75,
            temp_max: 15.75,
            pressure: 1015,
            humidity: 28,
          },
          wind: {
            speed: 1.83,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-26 09:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 14.25,
            feels_like: 10.23,
            temp_min: 14.25,
            temp_max: 14.25,
            pressure: 1015,
            humidity: 29,
          },
          wind: {
            speed: 2.25,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-26 12:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 21.25,
            feels_like: 18.07,
            temp_min: 21.25,
            temp_max: 21.25,
            pressure: 1016,
            humidity: 22,
          },
          wind: {
            speed: 1.44,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-26 15:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 25.95,
            feels_like: 22.19,
            temp_min: 25.95,
            temp_max: 25.95,
            pressure: 1012,
            humidity: 21,
          },
          wind: {
            speed: 2.97,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-26 18:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 27.45,
            feels_like: 23.81,
            temp_min: 27.45,
            temp_max: 27.45,
            pressure: 1007,
            humidity: 19,
          },
          wind: {
            speed: 2.75,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-26 21:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 24.86,
            feels_like: 21.95,
            temp_min: 24.86,
            temp_max: 24.86,
            pressure: 1008,
            humidity: 23,
          },
          wind: {
            speed: 1.84,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-27 00:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 19.91,
            feels_like: 16.32,
            temp_min: 19.91,
            temp_max: 19.91,
            pressure: 1013,
            humidity: 29,
          },
          wind: {
            speed: 2.58,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-27 03:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 17.75,
            feels_like: 15.49,
            temp_min: 17.75,
            temp_max: 17.75,
            pressure: 1014,
            humidity: 31,
          },
          wind: {
            speed: 0.47,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-27 06:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 15.85,
            feels_like: 13.13,
            temp_min: 15.85,
            temp_max: 15.85,
            pressure: 1013,
            humidity: 38,
          },
          wind: {
            speed: 1.39,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-27 09:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 13.97,
            feels_like: 11.02,
            temp_min: 13.97,
            temp_max: 13.97,
            pressure: 1014,
            humidity: 43,
          },
          wind: {
            speed: 1.73,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-27 12:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 20.7,
            feels_like: 18.34,
            temp_min: 20.7,
            temp_max: 20.7,
            pressure: 1015,
            humidity: 33,
          },
          wind: {
            speed: 1.44,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-27 15:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 25.35,
            feels_like: 22.23,
            temp_min: 25.35,
            temp_max: 25.35,
            pressure: 1011,
            humidity: 28,
          },
          wind: {
            speed: 3,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-27 18:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 26.75,
            feels_like: 22.93,
            temp_min: 26.75,
            temp_max: 26.75,
            pressure: 1007,
            humidity: 22,
          },
          wind: {
            speed: 3.37,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-27 21:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 24.25,
            feels_like: 21.63,
            temp_min: 24.25,
            temp_max: 24.25,
            pressure: 1007,
            humidity: 25,
          },
          wind: {
            speed: 1.59,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-28 00:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 19.45,
            feels_like: 16.21,
            temp_min: 19.45,
            temp_max: 19.45,
            pressure: 1012,
            humidity: 29,
          },
          wind: {
            speed: 1.99,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-28 03:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 17.33,
            feels_like: 15.01,
            temp_min: 17.33,
            temp_max: 17.33,
            pressure: 1013,
            humidity: 37,
          },
          wind: {
            speed: 1.05,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-28 06:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 15.5,
            feels_like: 13.22,
            temp_min: 15.5,
            temp_max: 15.5,
            pressure: 1013,
            humidity: 47,
          },
          wind: {
            speed: 1.43,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-28 09:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 14.35,
            feels_like: 11.96,
            temp_min: 14.35,
            temp_max: 14.35,
            pressure: 1014,
            humidity: 51,
          },
          wind: {
            speed: 1.63,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-28 12:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 21.48,
            feels_like: 19.72,
            temp_min: 21.48,
            temp_max: 21.48,
            pressure: 1015,
            humidity: 36,
          },
          wind: {
            speed: 1.14,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-28 15:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 26.47,
            feels_like: 23.54,
            temp_min: 26.47,
            temp_max: 26.47,
            pressure: 1012,
            humidity: 27,
          },
          wind: {
            speed: 2.86,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-28 18:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 27.18,
            feels_like: 23.85,
            temp_min: 27.18,
            temp_max: 27.18,
            pressure: 1008,
            humidity: 27,
          },
          wind: {
            speed: 3.62,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-28 21:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01d',
            },
          ],
          main: {
            temp: 24.75,
            feels_like: 22.83,
            temp_min: 24.75,
            temp_max: 24.75,
            pressure: 1008,
            humidity: 31,
          },
          wind: {
            speed: 1.57,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-29 00:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 20.3,
            feels_like: 17.55,
            temp_min: 20.3,
            temp_max: 20.3,
            pressure: 1014,
            humidity: 36,
          },
          wind: {
            speed: 2.25,
          },
          clouds: {
            all: 0,
          },
          dt_txt: '2020-03-29 03:00:00',
          cod: 0,
        },
        {
          weather: [
            {
              main: 'Clear',
              description: 'clear sky',
              icon: '01n',
            },
          ],
          main: {
            temp: 18.13,
            feels_like: 16.46,
            temp_min: 18.13,
            temp_max: 18.13,
            pressure: 1016,
            humidity: 53,
          },
          wind: {
            speed: 1.86,
          },
          clouds: {
            all: 3,
          },
          dt_txt: '2020-03-29 06:00:00',
          cod: 0,
        },
      ],
      cod: 200,
      message: '',
    };

    axios.get.mockResolvedValue(responseGet);

    const $auth = {
      getTokenSilently() {
        return 'fake-token';
      },
    };

    wrapper = shallowMount(WeatherForecast, {
      mocks: {
        $auth,
      },
    });
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('does load the Weather Forecast data when a successful HTTP GET occurs', () => {
    expect(wrapper.name()).toMatch('WeatherForecast');
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(
      expect.stringMatching('/weather-forecast'), {
        headers: { Authorization: 'Bearer fake-token' },
      },
    );

    // Check the news array is properly set
    expect(wrapper.vm.forecastResponse.list.length).toBeGreaterThan(0);
    expect(wrapper.vm.forecastResponse.list[0].main.temp).toEqual(15.4);
    expect(wrapper.vm.forecastResponse.list[0].weather[0].icon).toMatch('01n');

    // Test the getMode method
    expect(wrapper.vm.getMode(['a', 'a', 'b', 'c'])).toMatch('a');

    // Test the findMaxValue method
    expect(wrapper.vm.findMaxValue([1.3, 2.4, 3.7, 4.7, 5.6])).toEqual(6);

    // Test the findMinValue method
    expect(wrapper.vm.findMinValue([1.3, 2.4, 3.7, 4.7, 5.6])).toEqual(1);

    // Test the forecastByDay method
    expect(wrapper.vm.forecast['2020-03-24'].temp_max).toEqual([15.4, 13.82, 19.86, 25.77, 26.91]);
    expect(wrapper.vm.forecast['2020-03-24'].temp_min).toEqual([14.91, 13.45, 19.62, 25.65, 26.91]);

    // Check that the weather forecast information is displayed
    expect(wrapper.findAll('b-card').length).toEqual(6);
  });
});

describe('Implementation Test for WeatherForecast.vue with Failed HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    axios.get.mockRejectedValue(new Error('BAD REQUEST'));

    const $auth = {
      getTokenSilently() {
        return 'fake-token';
      },
    };

    wrapper = shallowMount(WeatherForecast, {
      mocks: {
        $auth,
      },
    });
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('does not load the top Weather Forecast data when failed HTTP GET occurs', () => {
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(
      expect.stringMatching('/weather-forecast'), {
        headers: { Authorization: 'Bearer fake-token' },
      },
    );

    // Check that the length of the forecastResponse array is equal to 0
    expect(wrapper.vm.forecastResponse.length).toEqual(0);

    // Check that the length of the forecast array is equal to 0
    expect(wrapper.vm.forecast.length).toEqual(0);


    expect(global.console.error).toHaveBeenCalledWith('BAD REQUEST');
  });
});
