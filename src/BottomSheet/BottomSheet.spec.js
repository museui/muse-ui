import test from '../utils/testing';
import BottomSheet from './BottomSheet';

test('Bottom Sheet', ({ mount }) => {
  it('should default view', async () => {
    const wrapper = mount(BottomSheet, {
      propsData: {
        open: true
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
