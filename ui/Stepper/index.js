import '../styles/components/stepper.less';
import theme from '../theme';
import StepperTheme from './theme';
import Stepper from './Stepper';
import Step from './Step';
import StepLabel from './StepLabel';
import StepButton from './StepButton';
import StepConnector from './StepConnector';
import StepContent from './StepContent';

Stepper.install = function (Vue) {
  Vue.component(Stepper.name, Stepper);
  Vue.component(Step.name, Step);
  Vue.component(StepLabel.name, StepLabel);
  Vue.component(StepButton.name, StepButton);
  Vue.component(StepConnector.name, StepConnector);
  Vue.component(StepContent.name, StepContent);
};

theme.addCreateTheme(StepperTheme);
export { Stepper, Step, StepLabel, StepButton, StepConnector, StepContent };
export default Stepper;
