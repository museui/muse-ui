export default {
  bind (el, binding) {
    if (binding.value) el.focus()
  },
  update (el, binding) {
    if (!binding.oldValue && binding.value) el.focus()
  }
}
