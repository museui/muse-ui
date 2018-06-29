import test from '../utils/testing';
import AutoComplete from './AutoComplete';
test('AutoComplete', ({ mount }) => {
  const data = [
    'Apple', 'Apricot', 'Avocado',
    'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
    'Boysenberry', 'Blood Orange',
    'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
    'Coconut', 'Cranberry', 'Clementine',
    'Damson', 'Date', 'Dragonfruit', 'Durian',
    'Elderberry',
    'Feijoa', 'Fig',
    'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
    'Honeydew', 'Huckleberry',
    'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
    'Kiwi fruit', 'Kumquat',
    'Lemon', 'Lime', 'Loquat', 'Lychee',
    'Nectarine',
    'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
    'Olive', 'Orange',
    'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
    'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
    'Quince',
    'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
    'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
    'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
    'Ugli fruit',
    'Watermelon'
  ];

  it('should default view', async () => {
    const wrapper = mount(AutoComplete, {});
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should set maxHeight', async () => {
    const wrapper = mount(AutoComplete, {
      propsData: {
        maxHeight: 600
      }
    });
    expect(wrapper.find('.mu-option-list')[0].hasStyle('max-height', '600px')).toBe(true);
  });

  it('should has data list', async () => {
    const wrapper = mount(AutoComplete, {
      propsData: {
        data: data
      }
    });
    const input = jest.fn(value => wrapper.setProps({ value }));
    const event = { target: { value: 'ta' }};
    wrapper.vm.$on('input', input);
    wrapper.vm.onInput(event);
    expect(input).toBeCalledWith('ta', event);
    return new Promise((reslove) => {
      setTimeout(() => {
        expect(wrapper.vm.open).toBe(true);
        reslove();
      }, wrapper.vm.debounce);
    });
  });

  it('should max search result six and open on focus', async () => {
    const wrapper = mount(AutoComplete, {
      propsData: {
        data: data,
        openOnFocus: true,
        maxSearchResults: 6
      }
    });

    wrapper.find('input')[0].trigger('focus');
    expect(wrapper.vm.open).toBe(true);
    expect(wrapper.vm.enableData.length).toBe(6);
  });
});
