# Form

`Mu-form` is used to implement form layouts and provide simple validation features.

## Example

:::demo
```html
<mu-container>
  <mu-flex align-items="center" style="padding-bottom: 8px;">
    <span style="margin-right: 16px;">Label Position:</span>
    <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="top" label="Top"></mu-radio>
    <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="left" label="Left"></mu-radio>
    <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="right" label="Right"></mu-radio>
  </mu-flex>
  <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
    <mu-form-item prop="input" label="Input">
      <mu-text-field v-model="form.input"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="select" label="Select">
      <mu-select v-model="form.select">
        <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
      </mu-select>
    </mu-form-item>
    <mu-form-item prop="date" label="Date Time">
      <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
    </mu-form-item>
    <mu-form-item prop="radio" label="Radio">
      <mu-radio v-model="form.radio" value="male" label="Male"></mu-radio>
      <mu-radio v-model="form.radio" value="female" label="Female"></mu-radio>
    </mu-form-item>
    <mu-form-item prop="checkbox" label="Checkbox">
      <mu-checkbox v-model="form.checkbox" value="eat" label="Eat"></mu-checkbox>
      <mu-checkbox v-model="form.checkbox" value="sleep" label="Sleep"></mu-checkbox>
      <mu-checkbox v-model="form.checkbox" value="run" label="Run"></mu-checkbox>
      <mu-checkbox v-model="form.checkbox" value="movie" label="Movie"></mu-checkbox>
    </mu-form-item>
    <mu-form-item prop="switch" label="Switch">
      <mu-switch v-model="form.switch"></mu-switch>
    </mu-form-item>
    <mu-form-item prop="slider" label="Slider">
      <mu-slider v-model="form.slider"></mu-slider>
    </mu-form-item>
    <mu-form-item prop="textarea" label="Textarea">
      <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.textarea"></mu-text-field>
    </mu-form-item>
  </mu-form>
</mu-container>
<script>
export default {
  data () {
    return {
      options: [
        'Option 1', 'Option 2', 'Option 3', 'Option 4',
        'Option 5', 'Option 6', 'Option 7', 'Option 8',
        'Option 9', 'Option 10'
      ],
      labelPosition: 'top',
      form: {
        input: '',
        select: '',
        date: '',
        radio: '',
        checkbox: [],
        switch: false,
        slider: 30,
        textarea: ''
      }
    }
  }
};
</script>
<style>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>
```
:::

## Form validation

:::demo
```html
<mu-container>
  <mu-form ref="form" :model="validateForm" class="mu-demo-form">
    <mu-form-item label="username" help-text="help text" prop="username" :rules="usernameRules">
      <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="password" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="isAgree" :rules="argeeRules">
      <mu-checkbox label="agreed to the user agreement" v-model="validateForm.isAgree"></mu-checkbox>
    </mu-form-item>
    <mu-form-item>
      <mu-button color="primary" @click="submit">submit</mu-button>
      <mu-button @click="clear">reset</mu-button>
    </mu-form-item>
  </mu-form>
</mu-container>
<script>
export default {
  data () {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: 'Username must be filled in'},
        { validate: (val) => val.length >= 3, message: 'Username length greater than 3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: 'Password must be filled in'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: 'Password length must be greater than 3 and less than 10'}
      ],
      argeeRules: [{ validate: (val) => !!val, message: 'Must agree with user agreement'}],
      validateForm: {
        username: '',
        password: '',
        isAgree: false
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
      });
    },
    clear () {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      };
    }
  }
};
</script>
<style>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>
```
:::

## Form Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| model | form data objects | Object | — | — |
| inline | whether it is an inline form | Boolean | — | — |
| label-width | label width |  String,Number | — | — |
| label-position | label position | String | top / left / right | top |
| auto-validate | whether to automatically verify the form | Boolean | — | true |

## Form Methods

| Name | Description | Parameters |
|-----|------|-----|
| validate | start form validation and return a Promise object  | — |
| clear | clear form verification result information | — |


## Form Item Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| prop | form field model field, which is required when using the validate method | String | — | — |
| icon | icon | String | — | — |
| label | font label | String | — | — |
| label-float | whether the label floats | Boolean | - | false |
| label-width | label width |  String,Number | — | — |
| label-position | label position | String | top / left / right | top |
| rules | form validation rules { validate: (val, model) , message: ''} | Array | — | — |
| help-text | help text | String | — | — |
| error-text | error message, setting this value causes the form validation status to become error and displays the error message | String | — | — |

## Form Item Slots

| Name | Description |
|------|------|
| label | form label slots |
| — | form input component slots |

<script>
export default {
  data () {
    return {
      options: [
        'Option 1', 'Option 2', 'Option 3', 'Option 4',
        'Option 5', 'Option 6', 'Option 7', 'Option 8',
        'Option 9', 'Option 10'
      ],
      labelPosition: 'top',
      form: {
        input: '',
        select: '',
        date: '',
        radio: '',
        checkbox: [],
        switch: false,
        slider: 30,
        textarea: ''
      },
      usernameRules: [
        { validate: (val) => !!val, message: 'Username must be filled in'},
        { validate: (val) => val.length >= 3, message: 'Username must be greater than 3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: 'Password must be filled in'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: 'Password length must be greater than 3 and less than 10'}
      ],
      argeeRules: [{ validate: (val) => !!val, message: 'Must agree with user agreement'}],
      validateForm: {
        username: '',
        password: '',
        isAgree: false
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
      });
    },
    clear () {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      };
    }
  }
};
</script>
<style>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>
