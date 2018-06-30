import test from '../utils/testing';
import Button from './Button';
import * as colors from '../theme/colors';

test('Button', ({ mount }) => {
  it('should default view', async () => {
    const wrapper = mount(Button, {});
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should variant style', async () => {
    const wrapper = mount(Button, {
      propsData: {
        fab: true
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.setProps({
      fab: false,
      flat: true
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.setProps({
      flat: false,
      icon: true
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.setProps({
      icon: false,
      small: true
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.setProps({
      small: false,
      large: true
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.setProps({
      large: false,
      round: true
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should custom color', async () => {
    const wrapper = mount(Button, {
      propsData: {
        color: 'primary',
        textColor: 'secondary'
      }
    });
    expect(wrapper.hasClass('mu-primary-color')).toBe(true);
    expect(wrapper.hasClass('mu-inverse')).toBe(true);
    expect(wrapper.hasClass('mu-secondary-text-color')).toBe(true);
    wrapper.setProps({
      color: 'teal',
      textColor: 'green'
    });
    expect(wrapper.hasStyle('background-color', colors.teal)).toBe(true);
    expect(wrapper.hasStyle('color', colors.green)).toBe(true);
    wrapper.setProps({
      color: '#000',
      textColor: '#fff'
    });
    expect(wrapper.hasStyle('background-color', '#000')).toBe(true);
    expect(wrapper.hasStyle('color', '#fff')).toBe(true);
  });
});
