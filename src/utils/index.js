import * as colorsObj from '../theme/colors';

const colors = Object.keys(colorsObj);
export function getColor (color) {
  if (!color || ['primary', 'secondary', 'success', 'warning', 'info', 'error'].indexOf(color) !== -1) return '';
  return colors.indexOf(color) !== -1 ? colorsObj[color] : color;
};

export function isNotNull (val) {
  return val !== undefined && val !== null;
}

export function isNull (val) {
  return val === undefined || val === null;
}

export function getWidth (w) {
  let width = String(w);
  if (width && width.indexOf('%') === -1 && width.indexOf('px') === -1) width += 'px';
  return width;
}

export function isPc () {
  var uaInfo = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  var agents = ['Android', 'iPhone', 'Windows Phone', 'iPad', 'iPod'];
  var flag = true;
  for (var i = 0; i < agents.length; i++) {
    if (uaInfo.indexOf(agents[i]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

export function retina () {
  // 处理retina屏幕显示效果
  if (isPc()) return;
  var classNames = [];
  const pixelRatio = typeof window !== undefined && window.devicePixelRatio || 1;
  classNames.push('pixel-ratio-' + Math.floor(pixelRatio));
  if (pixelRatio >= 2) {
    classNames.push('retina');
  }

  const html = document.getElementsByTagName('html')[0];

  classNames.forEach((className) => html.classList.add(className));
}

/**
 * 将 String, Object, Array 转成 Array
 */
export function convertClass (classes) {
  let newClasses = [];
  if (!classes) return newClasses;
  if (classes instanceof Array) {
    newClasses = newClasses.concat(classes);
  } else if (classes instanceof Object) {
    for (const name in classes) {
      if (classes[name]) newClasses.push(name);
    }
  } else {
    newClasses = newClasses.concat(classes.split(' '));
  }
  return newClasses;
}

export function createSimpleFunctional (c, el = 'div', name) {
  return {
    name,
    functional: true,

    render: (h, { data, children }) => {
      data.staticClass = (`${c} ${data.staticClass || ''}`).trim();

      return h(el, data, children);
    }
  };
}

export function getFirstComponentChild (children) {
  return children && children.filter(c => c && c.tag)[0];
};

export function isPromise (val) {
  return val && typeof val.then === 'function';
}

export function isObject (val) {
  return val !== null && val && typeof val === 'object' && !Array.isArray(val);
}

export function getObjAttr (obj, attrs) {
  if (!obj || !attrs) return;
  let value = obj;
  attrs.split('.').forEach((key, index) => {
    if (!value) return;
    value = value[key];
  });
  return value;
}

export function setObjAttr (obj, attrs, value) {
  attrs.split('.').forEach((key, index) => {
    if (attrs.length - index <= 1) {
      obj[key] = value;
      return;
    }
    obj = obj[key];
  });
}
