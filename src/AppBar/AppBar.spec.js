import Vue from 'vue';
import * as colors from '../theme/colors';
import test from '../utils/testing';
import AppBar from './AppBar';
import Icon from '../Icon';
test('AppBar', ({ mount }) => {
  it('should be default', async () => {
    const wrapper = mount(AppBar, {});
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should be set title', async () => {
    const wrapper = mount(AppBar, {
      propsData: {
        title: 'Muse-UI'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should be slots', async () => {
    const menuIcon = Vue.component('test', {
      components: {
        'mu-icon': Icon
      },
      render (h) {
        return h('mu-icon', {
          value: 'menu'
        });
      }
    });
    let wrapper = mount(AppBar, { slots: { left: [menuIcon] }});
    expect(wrapper.html()).toMatchSnapshot();
    wrapper = mount(AppBar, { slots: { right: [menuIcon] }});
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should be set color and text color', async () => {
    const wrapper = mount(AppBar, {
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

  it('should set zDepth', async () => {
    const wrapper = mount(AppBar, {});
    expect(wrapper.hasClass('mu-elevation-4')).toBe(true);
    wrapper.setProps({
      zDepth: 1
    });
    expect(wrapper.hasClass('mu-elevation-1')).toBe(true);
  });
});
