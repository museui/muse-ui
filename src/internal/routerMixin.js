// :to="to" :tag="tag" :activeClass="activeClass" :event="event" :exact="exact" :append="append" :replace="replace"
export default {
  props: {
    to: {
      type: [String, Object]
    },
    tag: {
      type: String,
      default: 'a'
    },
    activeClass: {
      type: String,
      default: 'router-link-active'
    },
    event: {
      type: [String, Array],
      default: 'click'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean
  }
}
