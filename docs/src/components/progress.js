import Vue from 'vue';
const Progress = Vue.extend({
  name: 'mu-progress',
  data () {
    return {
      show: false
    };
  },
  render (h) {
    return (
      <transition name='mu-fade-transition'>
        <mu-linear-progress v-show={this.show} class='mu-progress' color='secondary' />
      </transition>
    );
  }
});

let progress;

export default {
  start () {
    if (!progress) {
      progress = new Progress({
        el: document.createElement('div')
      });
      document.body.appendChild(progress.$el);
    }
    progress.show = true;
  },
  end () {
    progress.show = false;
  }
};
