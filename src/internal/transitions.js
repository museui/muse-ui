import '../styles/transitions.less';
export { default as ExpandTransition } from './ExpandTransition';

function createTransition (name, mode) {
  return {
    name,
    functional: true,
    render (h, context) {
      context.data = context.data || {};
      context.data.props = { name };
      context.data.on = context.data.on || {};
      if (!Object.isExtensible(context.data.on)) {
        context.data.on = { ...context.data.on };
      }

      if (mode) context.data.props.mode = mode;

      return h('transition', context.data, context.children);
    }
  };
}

export const FadeTransition = createTransition('mu-fade-transition');
export const SlideTopTransition = createTransition('mu-slide-top-transition');
export const SlideBottomTransition = createTransition('mu-slide-bottom-transition');
export const SlideLeftTransition = createTransition('mu-slide-left-transition');
export const SlideRightTransition = createTransition('mu-slide-right-transition');
export const PopoverTransiton = createTransition('mu-popover-transition');
export const BottomSheetTransition = createTransition('mu-bottom-sheet-transition');
export const ScaleTransition = createTransition('mu-scale-transition');
