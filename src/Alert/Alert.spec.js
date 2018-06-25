import test from '../utils/testing';
import Alert from './Alert';

test('Alert.vue', ({ mount }) => {
  it('show be show by default', async () => {
    const wrapper = mount(Alert, {});
    expect(wrapper.html()).toMatchSnapshot();
  });
});
