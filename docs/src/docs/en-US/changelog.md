# Update log

<mu-stepper orientation="vertical" :linear="false">
  <mu-step active>
    <mu-step-label>
      <mu-icon value="panorama_fish_eye" color="primary" slot="icon"></mu-icon>
      <span class="version-title">3.0.0-beta.6</span>
    </mu-step-label>
    <mu-step-content >
      <v3-0-0-beta6></v3-0-0-beta6>
    </mu-step-content>
  </mu-step>
  <mu-step active>
    <mu-step-label>
      <mu-icon value="panorama_fish_eye" color="primary" slot="icon"></mu-icon>
      <span class="version-title">3.0.0-beta.4</span>
    </mu-step-label>
    <mu-step-content >
      <v3-0-0-beta4></v3-0-0-beta4>
    </mu-step-content>
  </mu-step>
  <mu-step active>
    <mu-step-label>
      <mu-icon value="panorama_fish_eye" color="primary" slot="icon"></mu-icon>
      <span class="version-title">3.0.0-beta.3</span>
    </mu-step-label>
    <mu-step-content >
      <v3-0-0-beta3></v3-0-0-beta3>
    </mu-step-content>
  </mu-step>
  <mu-step active>
    <mu-step-label>
      <mu-icon value="panorama_fish_eye" color="primary" slot="icon"></mu-icon>
      <span class="version-title">3.0.0-beta.2</span>
    </mu-step-label>
    <mu-step-content >
      <v3-0-0-beta2></v3-0-0-beta2>
    </mu-step-content>
  </mu-step>
  <mu-step active>
    <mu-step-label>
      <mu-icon value="panorama_fish_eye" color="primary" slot="icon"></mu-icon>
      <span class="version-title">3.0.0-beta.1</span>
    </mu-step-label>
    <mu-step-content >
      <v3-0-0-beta1></v3-0-0-beta1>
    </mu-step-content>
  </mu-step>
  <mu-step active>
    <mu-step-label>
      <mu-icon value="panorama_fish_eye" color="primary" slot="icon"></mu-icon>
      <a href="/2.10.0" flat>View version 2.10.0</a>
    </mu-step-label>
  </mu-step>
</mu-stepper>

<script>
import V3Beta1 from './version/3.0.0-beta.1.md';
import V3Beta2 from './version/3.0.0-beta.2.md';
import V3Beta3 from './version/3.0.0-beta.3.md';
import V3Beta4 from './version/3.0.0-beta.4.md';
import V3Beta6 from './version/3.0.0-beta.6.md';

export default {
  components: {
    'v3-0-0-beta1': V3Beta1,
    'v3-0-0-beta2': V3Beta2,
    'v3-0-0-beta3': V3Beta3,
    'v3-0-0-beta4': V3Beta4,
    'v3-0-0-beta6': V3Beta6
  }
}
</script>
<style lang="less">
.version-title {
  font-size: 20px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.54);
}
.mu-step-content-inner .markdown-body {
  margin-bottom: 0;
  padding-left: 0;
  ul {
    padding-left: 22px !important;
    list-style-type: circle;
     + pre {
      margin: 8px 0 8px 22px;
    }
  }
  ol {
    list-style-type: decimal;
    padding-left: 22px !important;
    + pre {
      margin: 8px 0 8px 22px;
    }
  }
  p {
    margin: 8px 0;
  }
}
</style>
