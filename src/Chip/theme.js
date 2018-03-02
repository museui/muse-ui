import { fade, emphasize } from '../utils/colorManipulator';
export default (theme) => {
  return `
  .mu-chip {
    background-color: ${theme.background.chip};
    color: ${theme.text.primary};
  }
  .mu-chip:hover .mu-chip-delete-icon{
    color: ${fade(fade(theme.text.primary, 0.26), 0.4)};
  }
  .mu-chip-delete-icon{
    color: ${fade(theme.text.primary, 0.26)};
  }
  .mu-chip:active,
  .mu-chip:focus,
  .mu-chip.is-deletable {
    background-color: ${emphasize(theme.background.chip, 0.08)};
  }
  .mu-chip:hover{
    background-color: ${emphasize(theme.background.chip, 0.08)};
  }
  .mu-chip.mu-primary-color {
    background-color: ${theme.primary};
  }
  .mu-chip.mu-secondary-color {
    background-color: ${theme.secondary};
  }
  .mu-chip.mu-success-color {
    background-color: ${theme.success};
  }
  .mu-chip.mu-warning-color {
    background-color: ${theme.warning};
  }
  .mu-chip.mu-info-color {
    background-color: ${theme.info};
  }
  .mu-chip.mu-error-color {
    background-color: ${theme.error};
  }
  `;
};
