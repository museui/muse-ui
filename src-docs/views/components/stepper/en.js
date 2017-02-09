import description from './README_EN.md'

export default {
  description,
  simpleExample: 'step navigation on the horizontal direction',
  simpleExampleDesc: 'a example which launching a activity, the default step navigation is the next step should be after the previous step. But you can change the  `activeStep` to control the current step, and to show the related page by `activeStep`',
  verticalExample: 'step navigation on the horizontal vertical',
  verticalExampleDesc: 'the step content should be place in the `stepContent` component, when `activeStep` has changed it will show different content, `stepContent` only should be used in the vertical step navigation',
  nolinearExample: 'no-linear step navigation',
  nolinearExampleDesc: 'when `linear` is false, you can check the next step content without completing the previous step.`stepLabel` should be replaced with `stepButton` and listen the click event to change the step content.',
  controlExample: 'no-linear control example',
  controlExampleDesc: 'when the `linear` is false, `stepper` component is no longer pass `completed` attribute to `step`,  so you need to bind each `step` to `completed` manually',
  customExample: 'customize icons',
  stepper: {
    props: {
      activeStep: 'current step',
      linear: 'whether it is linear step navigation, when it is false, you can not control the completed and disabled attribute of `step` component ',
      orientation: 'horizontal or vertical'
    },
    slots: {
      default: 'is used to place the `step` component'
    }
  },
  step: {
    props: {
      active: 'whether it is the current step or not',
      completed: 'whether it is completed',
      disabled: 'disabled or not',
      index: 'index of step',
      last: 'last step or not'
    },
    slots: {
      default: 'is used to place the `stepLabel` 、 `stepButton` 、 `stepContent` components'
    }
  },
  stepLabel: {
    props: {
      active: 'whether it is the current step or not',
      completed: 'whether it is completed',
      disabled: 'disabled or not',
      num: 'num'
    },
    slots: {
      icon: 'is used to customize the left icon',
      default: 'is place the step title'
    }
  },
  stepButton: {
    props: {
      active: 'whether it is the current step or not',
      completed: 'whether it is completed',
      disabled: 'disabled or not',
      num: 'num',
      last: 'last step or not',
      childrenInLabel: 'whether the child node are all in the `stepLabel` component'
    },
    slots: {
      icon: 'is used to customize the right icon',
      default: 'is place the step title'
    },
    events: {
      click: 'click event'
    }
  },
  stepContent: {
    props: {
      active: 'whether it is the current step or not',
      last: 'last step or not'
    },
    slots: {
      default: 'place the content of step, this component is only used in the vertical step navigation mode'
    }
  }
}
