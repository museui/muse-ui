import test from '../utils/testing';
import Badge from './Badge';
import * as colors from '../theme/colors';
test('Badge', ({ mount }) => {
  it('should default view', async () => {
    const wrapper = mount(Badge, {});
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should custom class', async () => {
    const wrapper = mount(Badge, {
      propsData: {
        circle: true
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.setProps({
      badgeClass: 'custom-badge'
    });
    expect(wrapper.find('.custom-badge').length).toBe(1);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should custom color', async () => {
    const wrapper = mount(Badge, {
      propsData: {
        color: 'primary'
      }
    });
    const badge = wrapper.find('.mu-badge')[0];
    expect(badge.hasClass('mu-primary-color')).toBe(true);
    expect(badge.hasClass('mu-inverse')).toBe(true);
    wrapper.setProps({ color: 'teal' });
    expect(badge.hasStyle('background-color', colors.teal)).toBe(true);
    wrapper.setProps({ color: '#000' });
    expect(badge.hasStyle('background-color', '#000')).toBe(true);
  });
});
