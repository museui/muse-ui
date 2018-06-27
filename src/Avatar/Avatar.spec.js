import * as colors from '../theme/colors';
import test from '../utils/testing';
import Avatar from './Avatar';

test('Avatar', ({ mount }) => {
  it('should have an mu-avatar class', () => {
    const wrapper = mount(Avatar, {});
    expect(wrapper.hasClass('mu-avatar')).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should can set color and text-color', () => {
    const wrapper = mount(Avatar, {
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

  it('should be change size', () => {
    const wrapper = mount(Avatar, {
      propsData: {
        size: 56
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
