import test from '../utils/testing';
import Alert from './Alert';

test('Alert.vue', ({ mount }) => {
  it('show be show by default', async () => {
    const wrapper = mount(Alert, {
      propsData: {
        show: true
      }
    });

    expect(wrapper.vm.show).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
