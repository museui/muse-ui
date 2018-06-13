import Drag from '../../utils/drag';

function inserted (el, { value, modifiers }) {
  const drag = new Drag(el, modifiers.touch);
  el._drag = drag;
  drag.start((pos, e) => {
    value.start && value.start(pos, e);
  });
  drag.drag((pos, e) => {
    value.move && value.move(pos, e);
  });
  drag.end((pos, e) => {
    value.end && value.end(pos, e);
    const dirRatio = 0.5;
    const minDistance = 16;
    if (Math.abs(pos.y) < dirRatio * Math.abs(pos.x)) {
      value.left && pos.x < -minDistance && value.left(pos, e);
      value.right && pos.x > minDistance && value.right(pos, e);
    }

    if (Math.abs(pos.x) < dirRatio * Math.abs(pos.y)) {
      value.up && pos.y < -minDistance && value.up(pos, e);
      value.down && pos.y > minDistance && value.down(pos, e);
    }
  });
}
function unbind (el) {
  if (el._drag) el._drag.destory();
  el._drag = null;
}

export default {
  name: 'swipe',
  inserted,
  unbind
};
