export default (theme) => {
  return `
  .mu-linear-progress.mu-secondary-color .mu-linear-progress-background,
  .mu-linear-progress.mu-secondary-color .mu-linear-progress-indeterminate,
  .mu-linear-progress.mu-secondary-color .mu-linear-progress-determinate {
    background-color: ${theme.secondary};
  }
  .mu-linear-progress.mu-success-color .mu-linear-progress-background,
  .mu-linear-progress.mu-success-color .mu-linear-progress-indeterminate,
  .mu-linear-progress.mu-success-color .mu-linear-progress-determinate {
    background-color: ${theme.success};
  }
  .mu-linear-progress.mu-warning-color .mu-linear-progress-background,
  .mu-linear-progress.mu-warning-color .mu-linear-progress-indeterminate,
  .mu-linear-progress.mu-warning-color .mu-linear-progress-determinate {
    background-color: ${theme.warning};
  }
  .mu-linear-progress.mu-info-color .mu-linear-progress-background,
  .mu-linear-progress.mu-info-color .mu-linear-progress-indeterminate,
  .mu-linear-progress.mu-info-color .mu-linear-progress-determinate {
    background-color: ${theme.info};
  }
  .mu-linear-progress.mu-error-color .mu-linear-progress-background,
  .mu-linear-progress.mu-error-color .mu-linear-progress-indeterminate,
  .mu-linear-progress.mu-error-color .mu-linear-progress-determinate {
    background-color: ${theme.error};
  }
  .mu-linear-progress-background {
    background-color: ${theme.primary};
  }
  .mu-linear-progress-indeterminate{
    background-color: ${theme.primary};
  }
  .mu-linear-progress-determinate{
    background-color: ${theme.primary};
  }
  .mu-circle-spinner {
    border-color: ${theme.primary};
  }
  .mu-circle-spinner.mu-secondary-color {
    border-color: ${theme.secondary};
  }
  .mu-circular-progress.mu-secondary-color .mu-circular-progress-determinate-path {
    stroke: ${theme.secondary};
  }
  .mu-circle-spinner.mu-success-color {
    border-color: ${theme.success};
  }
  .mu-circular-progress.mu-success-color .mu-circular-progress-determinate-path {
    stroke: ${theme.success};
  }
  .mu-circle-spinner.mu-warning-color {
    border-color: ${theme.warning};
  }
  .mu-circular-progress.mu-warning-color .mu-circular-progress-determinate-path {
    stroke: ${theme.warning};
  }
  .mu-circle-spinner.mu-info-color {
    border-color: ${theme.info};
  }
  .mu-circular-progress.mu-info-color .mu-circular-progress-determinate-path {
    stroke: ${theme.info};
  }
  .mu-circle-spinner.mu-error-color {
    border-color: ${theme.error};
  }
  .mu-circular-progress.mu-error-color .mu-circular-progress-determinate-path {
    stroke: ${theme.error};
  }
  .mu-circular-progress-determinate-path{
    stroke: ${theme.primary};
  }
  `;
};
