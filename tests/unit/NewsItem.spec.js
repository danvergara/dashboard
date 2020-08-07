import { shallowMount } from '@vue/test-utils';
import NewsItem from '@/components/NewsItem.vue';

// Spy the console error
global.console.error = jest.fn();

describe('News Item basic implementation', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(NewsItem, {
      propsData: {
        source: '',
        author: '',
        title: '',
        description: '',
        url: '',
        urlToImage: '',
        publishedAt: '',
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('initializes with correct elements', () => {
    // check the name of the component
    expect(wrapper.name()).toMatch('NewsItem');

    // chec that 7 fields for the NewsItem Item are displayed
    expect(wrapper.findAll('h5').at(0).text()).toMatch('');
    expect(wrapper.findAll('p').at(0).text()).toMatch('Source:  Published at: Invalid Date');
    expect(wrapper.findAll('p').at(1).text()).toMatch('');
  });

  it('processes valid props data', () => {
    // Update the props passed in to the Weather component
    wrapper.setProps({
      source: 'Merca20.com',
      author: 'Verónica Malo Guzmán',
      title: 'Jeff Bezos publica una carta por el COVID-19',
      description: 'Dar certdiumbre a los empleados en momentos...',
      url: 'https://www.merca20.com/jeff-bezos-publica-una-carta-por-el-covid-19-y-es-una-gran-leccion-para-ti-que-eres-lider/',
      urlToImage: 'https://files.merca20.com/uploads/2019/03/amazon-1.jpg',
      publishedAt: '2020-03-22T18:01:00Z',
    });

    // check that the prop data is stored as expected within the component
    expect(wrapper.vm.source).toMatch('Merca20.com');
    expect(wrapper.vm.author).toMatch('Verónica Malo Guzmán');
    expect(wrapper.vm.title).toMatch('Jeff Bezos publica una carta por el COVID-19');
    expect(wrapper.vm.description).toMatch('Dar certdiumbre a los empleados en momentos...');
    expect(wrapper.vm.url).toMatch('https://www.merca20.com/jeff-bezos-publica-una-carta-por-el-covid-19-y-es-una-gran-leccion-para-ti-que-eres-lider/');
    expect(wrapper.vm.urlToImage).toMatch('https://files.merca20.com/uploads/2019/03/amazon-1.jpg');
    expect(wrapper.vm.publishedAt).toMatch('2020-03-22T18:01:00Z');
  });
});

describe('Displays the content passed as props', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(NewsItem, {
      propsData: {
        source: 'Merca20.com',
        author: 'Verónica Malo Guzmán',
        title: 'Jeff Bezos publica una carta por el COVID-19',
        description: 'Dar certdiumbre a los empleados en momentos...',
        url: 'https://www.merca20.com/jeff-bezos-publica-una-carta-por-el-covid-19-y-es-una-gran-leccion-para-ti-que-eres-lider/',
        urlToImage: 'https://files.merca20.com/uploads/2019/03/amazon-1.jpg',
        publishedAt: '2020-03-22T18:01:00Z',
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('processes valid props data', () => {
    // check that the prop data is stored as expected within the component
    expect(wrapper.vm.source).toMatch('Merca20.com');
    expect(wrapper.vm.author).toMatch('Verónica Malo Guzmán');
    expect(wrapper.vm.title).toMatch('Jeff Bezos publica una carta por el COVID-19');
    expect(wrapper.vm.description).toMatch('Dar certdiumbre a los empleados en momentos...');
    expect(wrapper.vm.url).toMatch('https://www.merca20.com/jeff-bezos-publica-una-carta-por-el-covid-19-y-es-una-gran-leccion-para-ti-que-eres-lider/');
    expect(wrapper.vm.urlToImage).toMatch('https://files.merca20.com/uploads/2019/03/amazon-1.jpg');
    expect(wrapper.vm.publishedAt).toMatch('2020-03-22T18:01:00Z');

    // chec that 7 fields for the NewsItem Item are displayed
    expect(wrapper.findAll('h5').at(0).text()).toMatch('Jeff Bezos publica una carta por el COVID-19');
    expect(wrapper.findAll('p').at(0).text()).toMatch('Source: Merca20.com Published at: Sun Mar 22 2020 Author: Verónica Malo Guzmán');
    expect(wrapper.findAll('p').at(1).text()).toMatch('Dar certdiumbre a los empleados en momentos...');
  });
});
