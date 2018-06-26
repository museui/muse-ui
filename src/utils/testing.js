import Vue from 'vue';
import { mount, shallow } from 'avoriaz';
import toHaveBeenWarnedInit from './to-have-ben-warned';
import MuseUI from '../index';

export default function test (name, cb) {
  toHaveBeenWarnedInit();

  MuseUI.install(Vue);

  rafPolyfill(window);

  describe(name, () =>
    cb({
      functionalContext,
      mount,
      shallow
    })
  );
}

test.skip = describe.skip;

function functionalContext (context = {}, children = []) {
  if (!Array.isArray(children)) children = [children];
  return {
    context: Object.assign(
      {
        data: {},
        props: {}
      },
      context
    ),
    children
  };
}

// requestAnimationFrame polyfill | Milos Djakonovic ( @Miloshio ) | MIT | https://github.com/milosdjakonovic/requestAnimationFrame-polyfill
function rafPolyfill (w) {
  const FRAME_RATE_INTERVAL = 1000 / 60;
  let allCallbacks = [];
  let executeAllScheduled = false;
  let shouldCheckCancelRaf = false;
  const callbacksForCancellation = [];
  function isToBeCancelled (cb) {
    for (var i = 0; i < callbacksForCancellation.length; i++) {
      if (callbacksForCancellation[i] === cb) {
        callbacksForCancellation.splice(i, 1);
        return true;
      }
    }
  }
  function executeAll () {
    executeAllScheduled = false;
    var _allCallbacks = allCallbacks;
    allCallbacks = [];
    for (var i = 0; i < _allCallbacks.length; i++) {
      if (shouldCheckCancelRaf === true) {
        if (isToBeCancelled(_allCallbacks[i])) {
          shouldCheckCancelRaf = false;
          return;
        }
      }
      _allCallbacks[i].apply(w, [new Date().getTime()]);
    }
  }
  function raf (callback) {
    allCallbacks.push(callback);
    if (executeAllScheduled === false) {
      w.setTimeout(executeAll, FRAME_RATE_INTERVAL);
      executeAllScheduled = true;
    }
    return callback;
  }
  function cancelRaf (callback) {
    callbacksForCancellation.push(callback);
    shouldCheckCancelRaf = true;
  }
  // https://gist.github.com/paulirish/1579671
  const vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !w.requestAnimationFrame; ++x) {
    w.requestAnimationFrame = w[vendors[x] + 'RequestAnimationFrame'];
    w.cancelAnimationFrame =
      w[vendors[x] + 'CancelAnimationFrame'] ||
      w[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!w.requestAnimationFrame) w.requestAnimationFrame = raf;
  if (!w.cancelAnimationFrame) w.cancelAnimationFrame = cancelRaf;
}
