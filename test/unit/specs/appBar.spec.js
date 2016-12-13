import { createTest, destroyVM } from '../util'
import appbar from 'muse-ui/appBar'

describe('AppBar', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createTest(appbar, {
      title: 'title'
    }, true)
    expect(vm.$el.querySelector('.mu-appbar-title').textContent).to.equal('title')
  })
})
