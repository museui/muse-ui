<template>
<div class="mu-circle-wrapper active" :style="{'width': size + 'px', 'height': size + 'px'}">
  <div class="mu-circle-spinner active" :class="{'mu-circle-secondary': secondary}" :style="spinnerStyle">
      <div class="mu-circle-clipper left">
          <div class="mu-circle" :style="{'border-width': borderWidth + 'px'}"></div>
      </div>
      <div class="mu-circle-gap-patch">
          <div class="mu-circle"></div>
      </div>
      <div class="mu-circle-clipper right">
          <div class="mu-circle" :style="{'border-width': borderWidth + 'px'}"></div>
      </div>
  </div>
</div>
</template>

<script>
import {getColor} from '../utils'
export default {
  name: 'mu-circle',
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: ''
    },
    borderWidth: {
      type: Number,
      default: 3
    },
    secondary: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    spinnerStyle () {
      return {
        'border-color': getColor(this.color)
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-circle-wrapper {
  display: inline-block;
  position: relative;
  width: 48px;
  height: 48px;

  &.active{
    -webkit-animation: container-rotate 1568ms linear infinite;
    animation: container-rotate 1568ms linear infinite;
  }
  .mu-circle {
    border-radius: 50%;
  }

  .left {
    float: left !important;
  }

  .right {
    float: right !important;
  }

}


.mu-circle-spinner {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-color: @primaryColor;
  opacity: 1;
  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mu-circle-secondary{
  border-color: @accentColor;
}

.mu-circle-clipper {
  display: inline-block;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
}

.mu-circle-gap-patch {
  position: absolute;
  top: 0;
  left: 45%;
  width: 10%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
}

.mu-circle-gap-patch .mu-circle {
  width: 1000%;
  left: -450%;
}

.mu-circle-clipper .mu-circle {
  width: 200%;
  height: 100%;
  border-width: 3px;
  border-style: solid;
  border-color: inherit;
  border-bottom-color: transparent !important;
  border-radius: 50%;
  -webkit-animation: none;
  animation: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
}

.mu-circle-spinner.active .mu-circle-clipper.left .mu-circle {
  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mu-circle-spinner.active .mu-circle-clipper.right .mu-circle {
    -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
    animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mu-circle-clipper.left .mu-circle {
  left: 0;
  border-right-color: transparent !important;
  -webkit-transform: rotate(129deg);
  transform: rotate(129deg);
}

.mu-circle-clipper.right .mu-circle {
    left: -100%;
    border-left-color: transparent !important;
    -webkit-transform: rotate(-129deg);
    transform: rotate(-129deg);
}


@-webkit-keyframes fill-unfill-rotate {
  12.5% {
    -webkit-transform: rotate(135deg);
  }
  25% {
    -webkit-transform: rotate(270deg);
  }
  37.5% {
    -webkit-transform: rotate(405deg);
  }
  50% {
    -webkit-transform: rotate(540deg);
  }
  62.5% {
    -webkit-transform: rotate(675deg);
  }
  75% {
    -webkit-transform: rotate(810deg);
  }
  87.5% {
    -webkit-transform: rotate(945deg);
  }
  to {
    -webkit-transform: rotate(1080deg);
  }
}
@keyframes fill-unfill-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  to {
    transform: rotate(1080deg);
  }
}
@-webkit-keyframes left-spin {
  from {
    -webkit-transform: rotate(130deg);
  }
  50% {
    -webkit-transform: rotate(-5deg);
  }
  to {
    -webkit-transform: rotate(130deg);
  }
}
@keyframes left-spin {
  from {
    transform: rotate(130deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  to {
    transform: rotate(130deg);
  }
}

@-webkit-keyframes right-spin {
    from {
        -webkit-transform: rotate(-130deg)
    }
    50% {
        -webkit-transform: rotate(5deg)
    }
    to {
        -webkit-transform: rotate(-130deg)
    }
}

@keyframes right-spin {
    from {
        transform: rotate(-130deg)
    }
    50% {
        transform: rotate(5deg)
    }
    to {
        transform: rotate(-130deg)
    }
}


@-webkit-keyframes container-rotate {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes container-rotate {
  to {
    transform: rotate(360deg);
  }
}

</style>
