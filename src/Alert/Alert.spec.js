import test from '../utils/testing';
import Alert from './Alert';

test('Alert', ({ mount }) => {
  it('should be show by default', async () => {
    const wrapper = mount(Alert, {});
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should be delete', async () => {
    const wrapper = mount(Alert, { propsData: { delete: true }});
    const deleteBtn = wrapper.find('.mu-alert-delete-btn')[0];
    const handleDelete = jest.fn();
    wrapper.vm.$on('delete', handleDelete);
    deleteBtn.trigger('click');
    expect(handleDelete).toBeCalledWith();
  });
  it('should be set color', async () => {
    const wrapper = mount(Alert, {
      propsData: {
        color: 'primary'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.setProps({ color: 'error' });
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.setProps({ color: '#fff' });
    expect(wrapper.hasStyle('background-color', '#fff')).toEqual(true);
  });
});
