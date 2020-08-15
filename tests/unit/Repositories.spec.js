import { mount } from '@vue/test-utils';
import Repositories from '@/components/Repositories.vue';
import axios from 'axios';

// Mock the axios library
jest.mock('axios');

// Spy the console error
global.console.error = jest.fn();

describe('Repositories.vue Test with successful HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    const responseGet = {
      data:
      {
        repositories: [
          {
            author: 'hashicorp',
            name: 'vault',
            avatar: 'https://github.com/hashicorp.png',
            url: 'https://github.com/hashicorp/vault',
            description: 'A tool for secrets management, encryption as a service, and privileged access management',
            language: 'Go',
            languageColor: '#00ADD8',
            stars: 17212,
            forks: 2546,
            currentPeriodStars: 763,
            builtBy: [
              {
                username: 'jefferai',
                herf: 'https://github.com/jefferai',
                avatar: 'https://avatars1.githubusercontent.com/u/28627',
              },
              {
                username: 'vishalnayak',
                herf: 'https://github.com/vishalnayak',
                avatar: 'https://avatars3.githubusercontent.com/u/3053672',
              },
              {
                username: 'armon',
                herf: 'https://github.com/armon',
                avatar: 'https://avatars3.githubusercontent.com/u/592032',
              },
              {
                username: 'briankassouf',
                herf: 'https://github.com/briankassouf',
                avatar: 'https://avatars1.githubusercontent.com/u/1916073',
              },
              {
                username: 'mitchellh',
                herf: 'https://github.com/mitchellh',
                avatar: 'https://avatars1.githubusercontent.com/u/1299',
              },
            ],
          },
          {
            author: 'Dreamacro',
            name: 'clash',
            avatar: 'https://github.com/Dreamacro.png',
            url: 'https://github.com/Dreamacro/clash',
            description: 'A rule-based tunnel in Go.',
            language: 'Go',
            languageColor: '#00ADD8',
            stars: 10413,
            forks: 1457,
            currentPeriodStars: 337,
            builtBy: [
              {
                username: 'Dreamacro',
                herf: 'https://github.com/Dreamacro',
                avatar: 'https://avatars1.githubusercontent.com/u/8615343',
              },
              {
                username: 'beyondkmp',
                herf: 'https://github.com/beyondkmp',
                avatar: 'https://avatars3.githubusercontent.com/u/5462444',
              },
              {
                username: 'comzyh',
                herf: 'https://github.com/comzyh',
                avatar: 'https://avatars2.githubusercontent.com/u/1068203',
              },
              {
                username: 'comwrg',
                herf: 'https://github.com/comwrg',
                avatar: 'https://avatars2.githubusercontent.com/u/19854253',
              },
              {
                username: 'Kr328',
                herf: 'https://github.com/Kr328',
                avatar: 'https://avatars1.githubusercontent.com/u/39107975',
              },
            ],
          },
          {
            author: 'influxdata',
            name: 'telegraf',
            avatar: 'https://github.com/influxdata.png',
            url: 'https://github.com/influxdata/telegraf',
            description: 'The plugin-driven server agent for collecting & reporting metrics.',
            language: 'Go',
            languageColor: '#00ADD8',
            stars: 8924,
            forks: 3633,
            currentPeriodStars: 46,
            builtBy: [
              {
                username: 'sparrc',
                herf: 'https://github.com/sparrc',
                avatar: 'https://avatars0.githubusercontent.com/u/7155926',
              },
              {
                username: 'danielnelson',
                herf: 'https://github.com/danielnelson',
                avatar: 'https://avatars2.githubusercontent.com/u/1048079',
              },
              {
                username: 'glinton',
                herf: 'https://github.com/glinton',
                avatar: 'https://avatars3.githubusercontent.com/u/2653109',
              },
              {
                username: 'evanphx',
                herf: 'https://github.com/evanphx',
                avatar: 'https://avatars2.githubusercontent.com/u/7',
              },
              {
                username: 'ssoroka',
                herf: 'https://github.com/ssoroka',
                avatar: 'https://avatars2.githubusercontent.com/u/7130',
              },
            ],
          },
          {
            author: 'upmasked',
            name: 'number-verifier',
            avatar: 'https://github.com/upmasked.png',
            url: 'https://github.com/upmasked/number-verifier',
            description: 'Number Verifier is a SMS verification tool that makes it easy to get a disposable SMS number and bypass SMS number verifications on any site.',
            language: 'Go',
            languageColor: '#00ADD8',
            stars: 735,
            forks: 31,
            currentPeriodStars: 467,
            builtBy: [
              {
                username: 'upmasked',
                herf: 'https://github.com/upmasked',
                avatar: 'https://avatars0.githubusercontent.com/u/67507391',
              },
            ],
          },
          {
            author: 'ardanlabs',
            name: 'gotraining',
            avatar: 'https://github.com/ardanlabs.png',
            url: 'https://github.com/ardanlabs/gotraining',
            description: 'Go Training Class Material :',
            language: 'Go',
            languageColor: '#00ADD8',
            stars: 7986,
            forks: 1570,
            currentPeriodStars: 384,
            builtBy: [
              {
                username: 'ardan-bkennedy',
                herf: 'https://github.com/ardan-bkennedy',
                avatar: 'https://avatars0.githubusercontent.com/u/2280005',
              },
              {
                username: 'jcbwlkr',
                herf: 'https://github.com/jcbwlkr',
                avatar: 'https://avatars1.githubusercontent.com/u/2027263',
              },
              {
                username: 'dwhitena',
                herf: 'https://github.com/dwhitena',
                avatar: 'https://avatars2.githubusercontent.com/u/4524535',
              },
              {
                username: 'extemporalgenome',
                herf: 'https://github.com/extemporalgenome',
                avatar: 'https://avatars3.githubusercontent.com/u/536740',
              },
              {
                username: 'markbates',
                herf: 'https://github.com/markbates',
                avatar: 'https://avatars3.githubusercontent.com/u/3528',
              },
            ],
          },
          {
            author: 'projectdiscovery',
            name: 'nuclei',
            avatar: 'https://github.com/projectdiscovery.png',
            url: 'https://github.com/projectdiscovery/nuclei',
            description: 'Nuclei is a fast tool for configurable targeted scanning based on templates offering massive extensibility and ease of use.',
            language: 'Go',
            languageColor: '#00ADD8',
            stars: 786,
            forks: 124,
            currentPeriodStars: 71,
            builtBy: [
              {
                username: 'Mzack9999',
                herf: 'https://github.com/Mzack9999',
                avatar: 'https://avatars0.githubusercontent.com/u/13421144',
              },
              {
                username: 'Ice3man543',
                herf: 'https://github.com/Ice3man543',
                avatar: 'https://avatars1.githubusercontent.com/u/22318055',
              },
              {
                username: 'bauthard',
                herf: 'https://github.com/bauthard',
                avatar: 'https://avatars3.githubusercontent.com/u/8293321',
              },
              {
                username: 'ehrishirajsharma',
                herf: 'https://github.com/ehrishirajsharma',
                avatar: 'https://avatars2.githubusercontent.com/u/35542790',
              },
              {
                username: 'manuelbua',
                herf: 'https://github.com/manuelbua',
                avatar: 'https://avatars0.githubusercontent.com/u/819314',
              },
            ],
          },
        ],
      },
    };

    axios.get.mockResolvedValue(responseGet);

    const $auth = {
      getTokenSilently() {
        return 'fake-token';
      },
    };

    wrapper = mount(Repositories, {
      mocks: {
        $auth,
      },
    });
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('does load the github treding repositories api data when a successful HTTP GET occurs', () => {
    expect(wrapper.name()).toMatch('Repositories');
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(expect.stringMatching('/repositories'), {
      headers: { Authorization: 'Bearer fake-token' },
      params: { language: 'golang', since: 'weekly' },
    });

    // Check the repositories array is properly set
    expect(wrapper.vm.repositories.length).toBeGreaterThan(0);
    expect(wrapper.vm.repositories.length).toEqual(6);
    expect(wrapper.vm.repositories[0].name).toMatch('vault');
    expect(wrapper.vm.repositories[0].author).toMatch('hashicorp');
    expect(wrapper.vm.repositories[0].language).toMatch('Go');

    // check that the repositories data are displayed
    expect(wrapper.findAll('li').length).toBeGreaterThan(0);
    expect(wrapper.findAll('b-card-text').at(0).text()).toContain('A tool for secrets management, encryption as a service, and privileged access management');
    expect(wrapper.findAll('b-card-text').at(1).text()).toContain('A rule-based tunnel in Go.');
    expect(wrapper.findAll('b-card-text').at(2).text()).toContain('The plugin-driven server agent for collecting & reporting metrics.');

    wrapper.vm.$nextTick().then(() => {
      // check that the author and the name ared displayed
      expect(wrapper.findAll('h5').at(1).text()).toContain('hashicorp/vault');
      expect(wrapper.findAll('h5').at(2).text()).toContain('Dreamacro/clash');
      expect(wrapper.findAll('h5').at(3).text()).toContain('influxdata/telegraf');

      // check that the number of the stars is correct
      expect(wrapper.findAll('small').at(1).text()).toContain('17212');
      expect(wrapper.findAll('small').at(2).text()).toContain('10413');
      expect(wrapper.findAll('small').at(3).text()).toContain('8924');
    })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error.message);
      });
  });
});

describe('Implementation Test for Repositories.vue with Failed HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    axios.get.mockRejectedValue(new Error('BAD REQUEST'));

    const $auth = {
      getTokenSilently() {
        return 'fake-token';
      },
    };

    wrapper = mount(Repositories, {
      mocks: {
        $auth,
      },
    });
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('does not load the top news data when failed HTTP GET occurs', () => {
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(expect.stringMatching('/repositories'), {
      headers: { Authorization: 'Bearer fake-token' },
      params: { language: 'golang', since: 'weekly' },
    });

    // Check that the length of the news array is 0
    expect(wrapper.vm.repositories.length).toEqual(0);

    // Check that there is no news data displayed when the GET request fails
    expect(wrapper.findAll('li').length).toEqual(0);
    expect(wrapper.findAll('b-media').length).toEqual(0);
    expect(wrapper.findAll('h5').length).toEqual(2);

    expect(global.console.error).toHaveBeenCalledWith('BAD REQUEST');
  });
});
