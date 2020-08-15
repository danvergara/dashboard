import { mount } from '@vue/test-utils';
import News from '@/components/News.vue';
import axios from 'axios';

// Mock the axios library
jest.mock('axios');

// Spy the console Error
global.console.error = jest.fn();

describe('Implementation test for News.vue with successful HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    const responseGet = {
      data:
      {
        news: [
          {
            source: {
              name: 'Merca20.com',
            },
            author: 'Verónica Malo Guzmán',
            title: 'Jeff Bezos publica una carta por el COVID-19',
            description: 'Dar certdiumbre a los empleados en momentos...',
            url: 'https://www.merca20.com/jeff-bezos-publica-una-carta-por-el-covid-19-y-es-una-gran-leccion-para-ti-que-eres-lider/',
            urlToImage: 'https://files.merca20.com/uploads/2019/03/amazon-1.jpg',
            publishedAt: '2020-03-22T18:01:00Z',
            contentt: '',
          },
          {
            source: {
              name: 'Eleconomista.com.mx',
            },
            author: 'YolandaMorales',
            title: '4 medidas de Banxico para garantizar liquidez para los bancos - El Economista',
            description: 'Si el Banco de México tuviera que recurrir a una intervención directa en el mercado cambiario, tendría 245,619 millones de dólares disponibles que podría utilizar para tratar de ordenar los movimientos bruscos del peso contra el dólar.',
            url: 'https://www.eleconomista.com.mx/economia/4-medidas-de-Banxico-para-garantizar-liquidez-para-los-bancos-20200322-0001.html',
            urlToImage: 'https://www.eleconomista.com.mx/__export/1584897636906/sites/eleconomista/img/2020/01/14/banxico.jpg_673822677.jpg',
            publishedAt: '2020-03-22T17:32:42Z',
            contentt: '',
          },
          {
            source: {
              name: 'Debate.com.mx',
            },
            author: 'EL DEBATE',
            title: 'Precio del dólar hoy domingo 22 de marzo de 2020 - DEBATE',
            description: 'Así amaneció el tipo de cambio en México, respecto al dólar estadounidense',
            url: 'https://www.debate.com.mx/economia/Precio-del-dolar-hoy-domingo-22-de-marzo-de-2020-20200322-0016.html',
            urlToImage: 'https://assets.debate.com.mx/__export/1584880063209/sites/debate/img/2020/03/22/dolar_x2x_crop1584879952239.jpg_673822677.jpg',
            publishedAt: '2020-03-22T12:46:14Z',
            contentt: '',
          },
          {
            source: {
              name: 'Sdpnoticias.com',
            },
            author: 'Verónica Malo Guzmán',
            title: 'Asustados por el COVID-19… esos empresarios hacen que paguen trabajadores, trabajadoras - SDPnoticias.com',
            description: 'Ojalá que el CCE, el Consejo Mexicano de Negocios, la Coparmex y demás organismos empresariales repudien la actitud de Alsea',
            url: 'https://www.sdpnoticias.com/columnas/veronica-malo-guzman-alsea-torrado-coronavirus-amlo-covid-crisis-trabajadores.html',
            urlToImage: 'https://www.sdpnoticias.com/files/image_804_455/uploads/2019/08/05/5d4889ca3bfab.jpeg',
            publishedAt: '2020-03-22T12:25:08Z',
            contentt: '',
          },
          {
            source: {
              name: 'Eluniversal.com.mx',
            },
            author: '',
            title: 'Tarjetas sin comisiones, rivales para los bancos | El Universal - El Universal',
            description: 'La llegada de nuevas financieras y la obligación de tener un producto de este tipo en las sucursales tradicionales hacen que más personas se conviertan en usuarios',
            url: 'https://www.eluniversal.com.mx/cartera/tarjetas-sin-comisiones-rivales-para-los-bancos',
            urlToImage: 'https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2020/03/22/1200-cartera.jpg?itok=ShDOeEof',
            publishedAt: '2020-03-22T09:55:01Z',
            contentt: '',
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

    wrapper = mount(News, {
      mocks: {
        $auth,
      },
    });
  });

  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('does load the News data when a successful HTTP GET occurs', () => {
    expect(wrapper.name()).toMatch('News');
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toBeCalledWith(expect.stringMatching('/top-news'), {
      headers: { Authorization: 'Bearer fake-token' },
    });

    // Check the news array is properly set

    // Check the length of the news array is greather than 0
    expect(wrapper.vm.news.length).toBeGreaterThan(0);
    expect(wrapper.vm.news[0].source.name).toMatch('Merca20.com');
    expect(wrapper.vm.news[0].title).toMatch('Jeff Bezos publica una carta por el COVID-19');

    // Check that the news information is displayed
    expect(wrapper.findAll('li').length).toBeGreaterThan(1);
    expect(wrapper.findAll('b-media').length).toBeGreaterThan(1);
    expect(wrapper.findAll('h5').at(1).text()).toMatch('Jeff Bezos publica una carta por el COVID-19');
    expect(wrapper.findAll('p').at(0).text()).toContain('Merca20.com');
    expect(wrapper.findAll('p').at(0).text()).toContain('Verónica Malo Guzmán');
    expect(wrapper.findAll('p').at(0).text()).toContain('Sun Mar 22 2020');
    expect(wrapper.findAll('p').at(1).text()).toMatch('Dar certdiumbre a los empleados en momentos...');
  });
});

describe('Implementation Test for News.vue with Failed HTTP GET', () => {
  let wrapper = null;

  beforeEach(() => {
    axios.get.mockRejectedValue(new Error('BAD REQUEST'));

    const $auth = {
      getTokenSilently() {
        return 'fake-token';
      },
    };

    wrapper = mount(News, {
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
    expect(axios.get).toBeCalledWith(expect.stringMatching('/top-news'), {
      headers: { Authorization: 'Bearer fake-token' },
    });

    // Check that the length of the news array is 0
    expect(wrapper.vm.news.length).toEqual(0);

    // Check that there is no news data displayed when the GET request fails
    expect(wrapper.findAll('li').length).toEqual(0);
    expect(wrapper.findAll('b-media').length).toEqual(0);
    expect(wrapper.findAll('h5').length).toEqual(1);

    expect(global.console.error).toHaveBeenCalledWith('BAD REQUEST');
  });
});
