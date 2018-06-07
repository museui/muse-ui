import TextField from '../TextField';
import Popover from '../Popover';
import { List, ListItem } from '../List';

const TextFieldProps = {
  ...TextField.props
};
delete TextFieldProps.rows;
delete TextFieldProps.rowsMax;
delete TextFieldProps.multiLine;
export default {
  name: 'mu-auto-complete',
  props: {
    ...TextFieldProps,
    data: {
      type: Array,
      default: () => []
    },
    openOnFocus: Boolean
  },
  data () {
    return {
      open: false
    };
  },
  methods: {
    generateProps () {
      const obj = {};
      Object.keys(TextFieldProps).forEach(key => {
        obj[key] = this[key];
      });
      return obj;
    },
    createContentList (h) {
      return h(List, {
        props: {
        }
      }, this.data.map((item, index) => {
        return h(ListItem, {
          props: {
            button: true
          }
        }, this.$scopedSlots.default({
          item,
          index
        }));
      }));
    }
  },
  render (h) {
    return h(TextField, {
      props: {
        ...this.generateProps()
      },
      ref: 'input',
      attrs: this.$attrs,
      on: {
        ...this.$listeners
      }
    }, [
      h(Popover, {
        props: {
          trigger: this.$refs.input,
          open: this.open
        }
      }, [
      ])
    ]);
  }
};
