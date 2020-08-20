import { shallowMount } from '@vue/test-utils';
import Job from '@/components/Job.vue';

// Spy the console error
global.console.error = jest.fn();

describe('Job item basic implementation', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Job, {
      propsData: {
        title: '',
        company_logo: '',
        company: '',
        description: '',
        location: '',
        how_to_apply: '',
        created_at: '',
        company_url: '',
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('initializes with empty elements', () => {
    // Check the name of the component
    expect(wrapper.name()).toMatch('Job');

    // Check that the card text tags are empty
    expect(wrapper.findAll('b-card-text').at(0).text()).toMatch('Company:');
    expect(wrapper.findAll('b-card-text').at(1).text()).toMatch('Location:');
    expect(wrapper.findAll('b-card-text').at(2).text()).toMatch('Description:');
    expect(wrapper.findAll('b-card-text').at(3).text()).toMatch('How to apply:');
    expect(wrapper.findAll('b-card-text').at(4).text()).toMatch('Created at:');
  });

  it('processes valid props data', () => {
    // Update the props, using the setProps method
    wrapper.setProps({
      title: 'Senior Backend developer',
      company_logo: 'https://www.company.com/logo.png',
      company: 'Awesome startup',
      description: 'Hiring a backend developer',
      location: 'NY',
      how_to_apply: 'Send your resume to hr@startup.com',
      created_at: 'Wed Aug 19 13:53:39 UTC 2020',
      company_url: 'https://www.company.com',
    });

    // Check that the prop data is stored as expected within the component
    expect(wrapper.vm.title).toMatch('Senior Backend developer');
    expect(wrapper.vm.company_logo).toMatch('https://www.company.com/logo.png');
    expect(wrapper.vm.company).toMatch('Awesome startup');
    expect(wrapper.vm.description).toMatch('Hiring a backend developer');
    expect(wrapper.vm.location).toMatch('NY');
    expect(wrapper.vm.how_to_apply).toMatch('Send your resume to hr@startup.com');
    expect(wrapper.vm.created_at).toMatch('Wed Aug 19 13:53:39 UTC 2020');
    expect(wrapper.vm.company_url).toMatch('https://www.company.com');
  });
});

describe('Dispplays the content passed as props', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Job, {
      propsData: {
        title: 'Senior Backend developer',
        company_logo: 'https://www.company.com/logo.png',
        company: 'Awesome startup',
        description: 'Hiring a backend developer',
        location: 'NY',
        how_to_apply: 'Send your resume to hr@startup.com',
        created_at: 'Wed Aug 19 13:53:39 UTC 2020',
        company_url: 'https://www.company.com',
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('validates props data', () => {
    // Check that the prop data is stored as expected within the component
    expect(wrapper.vm.title).toMatch('Senior Backend developer');
    expect(wrapper.vm.company_logo).toMatch('https://www.company.com/logo.png');
    expect(wrapper.vm.company).toMatch('Awesome startup');
    expect(wrapper.vm.description).toMatch('Hiring a backend developer');
    expect(wrapper.vm.location).toMatch('NY');
    expect(wrapper.vm.how_to_apply).toMatch('Send your resume to hr@startup.com');
    expect(wrapper.vm.created_at).toMatch('Wed Aug 19 13:53:39 UTC 2020');
    expect(wrapper.vm.company_url).toMatch('https://www.company.com');


    // Check that the 5 fields for the Job item are displayed
    expect(wrapper.findAll('b-card-text').at(0).text()).toMatch('Company: Awesome startup');
    expect(wrapper.findAll('b-card-text').at(1).text()).toMatch('Location: NY');
    expect(wrapper.findAll('b-card-text').at(2).text()).toMatch('Description:  Hiring a backend developer');
    expect(wrapper.findAll('b-card-text').at(3).text()).toMatch('How to apply:  Send your resume to hr@startup.com');
    expect(wrapper.findAll('b-card-text').at(4).text()).toMatch('Created at: Wed Aug 19 13:53:39 UTC 2020');
  });
});
