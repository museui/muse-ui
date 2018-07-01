import test from '../utils/testing';
import Card from './card';

test('Card', ({ mount }) => {
  it('should card view', async () => {
    const wrapper = mount(Card, {});
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.setProps({
      raised: true
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
