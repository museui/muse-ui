import Vue from 'vue';
import test from '../utils/testing';
import Breadcrumbs from './Breadcrumbs';
import BreadcrumbsItem from './BreadcrumbsItem';

test('Breadcrumbs Items', ({ mount }) => {
  function createBreadcrumbsItem (text) {
    return Vue.component('breadcrumbs-item', {
      components: {
        'mu-breadcrumbs-item': BreadcrumbsItem
      },
      render (h) {
        return h('mu-breadcrumbs-item', {
          slots: {
            default: [
              text
            ]
          }
        });
      }
    });
  }

  it('should default view', async () => {
    const wrapper = mount(Breadcrumbs, {
      slots: {
        default: [
          createBreadcrumbsItem('home'),
          createBreadcrumbsItem('dashboard')
        ]
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
