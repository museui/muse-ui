import Vue from 'vue';
import test from '../utils/testing';
import BottomNav from './BottomNav';
import BottomNavItem from './BottomNavItem';
test('Bottom Navigation', ({ mount }) => {
  function createNavItem (icon, text, value) {
    return Vue.component('nav-item', {
      component: {
        'mu-bottom-nav-item': BottomNavItem
      },
      render (h) {
        return h('mu-bottom-nav-item', {
          props: {
            icon: icon,
            title: text,
            value: value
          }
        });
      }
    });
  }
  it('should default view', async () => {
    const wrapper = mount(BottomNav, {
      slots: {
        default: [
          createNavItem('restore', 'Recents'),
          createNavItem('favorite', 'Favorites'),
          createNavItem('location_on', 'Nearby')
        ]
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should shift mode', async () => {
    const wrapper = mount(BottomNav, {
      propsData: {
        shift: true
      },
      slots: {
        default: [
          createNavItem('restore', 'Recents'),
          createNavItem('favorite', 'Favorites'),
          createNavItem('location_on', 'Nearby')
        ]
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should change value', async () => {
    const wrapper = mount(BottomNav, {
      propsData: {
        value: 'Recents'
      },
      slots: {
        default: [
          createNavItem('restore', 'Recents', 'Recents'),
          createNavItem('favorite', 'Favorites', 'Favorites'),
          createNavItem('location_on', 'Nearby', 'Nearby')
        ]
      }
    });
    expect(wrapper.find('.mu-bottom-item')[0].hasClass('mu-bottom-item-active')).toBe(true);
    wrapper.setProps({
      value: 'Nearby'
    });
    expect(wrapper.vm.activeValue).toBe('Nearby');
  });
});
