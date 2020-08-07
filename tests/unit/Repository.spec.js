import { shallowMount } from '@vue/test-utils';
import Repository from '@/components/Repository.vue';

// Spy the console error
global.console.error = jest.fn();

describe('Repository Item basic implementation', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Repository, {
      propsData: {
        url: '',
        author: '',
        name: '',
        avatar: '',
        description: '',
        language: '',
        languageColor: '',
        stars: 0,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('initializes with correct elements', () => {
    // check the name of the component
    expect(wrapper.name()).toMatch('Repository');

    // chec that 7 fields for the Repository Item are displayed
    expect(wrapper.findAll('b-card-text').at(0).text()).toMatch('');
  });

  it('processes valid props data', () => {
    // Update the props passed in to the Weather component
    wrapper.setProps({
      author: 'hashicorp',
      name: 'vault',
      avatar: 'https://github.com/hashicorp.png',
      url: 'https://github.com/hashicorp/vault',
      description: 'A tool for secrets management, encryption as a service, and privileged access management',
      language: 'Go',
      languageColor: '#00ADD8',
      stars: 17212,
    });

    // check that the prop data is stored as expected within the component
    expect(wrapper.vm.url).toMatch('https://github.com/hashicorp/vault');
    expect(wrapper.vm.author).toMatch('hashicorp');
    expect(wrapper.vm.name).toMatch('vault');
    expect(wrapper.vm.avatar).toMatch('https://github.com/hashicorp.png');
    expect(wrapper.vm.description).toMatch('A tool for secrets management, encryption as a service, and privileged access management');
    expect(wrapper.vm.language).toMatch('Go');
    expect(wrapper.vm.languageColor).toMatch('#00ADD8');
    expect(wrapper.vm.stars).toEqual(17212);
  });
});

describe('Displays the content passed as props', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Repository, {
      propsData: {
        author: 'hashicorp',
        name: 'vault',
        avatar: 'https://github.com/hashicorp.png',
        url: 'https://github.com/hashicorp/vault',
        description: 'A tool for secrets management, encryption as a service, and privileged access management',
        language: 'Go',
        languageColor: '#00ADD8',
        stars: 17212,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('processes valid props data', () => {
    // check that the prop data is stored as expected within the component
    expect(wrapper.vm.url).toMatch('https://github.com/hashicorp/vault');
    expect(wrapper.vm.author).toMatch('hashicorp');
    expect(wrapper.vm.name).toMatch('vault');
    expect(wrapper.vm.avatar).toMatch('https://github.com/hashicorp.png');
    expect(wrapper.vm.description).toMatch('A tool for secrets management, encryption as a service, and privileged access management');
    expect(wrapper.vm.language).toMatch('Go');
    expect(wrapper.vm.languageColor).toMatch('#00ADD8');
    expect(wrapper.vm.stars).toEqual(17212);

    // Chec that the 8 fields for the Repository Item are displayed
    expect(wrapper.findAll('b-card-text').at(0).text()).toMatch('A tool for secrets management, encryption as a service, and privileged access management');
  });
});
