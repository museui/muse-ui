import BaseTheme from './baseTheme';
import AppBarTheme from '../AppBar/theme';
import AvatarTheme from '../Avatar/theme';
import BadgeTheme from '../Badge/theme';
import BottomNavTheme from '../BottomNav/theme';
import BottomSheetTheme from '../BottomSheet/theme';
import BreadcrumbsTheme from '../Breadcrumbs/theme';
import ButtonTheme from '../Button/theme';
import CardTheme from '../Card/theme';
import CheckboxTheme from '../Checkbox/theme';
import ChipTheme from '../Chip/theme';
import DataTableTheme from '../DataTable/theme';
import DialogTheme from '../Dialog/theme';
import DividerTheme from '../Divider/theme';
import DrawerTheme from '../Drawer/theme';
import GradListTheme from '../GridList/theme';
import ListTheme from '../List/theme';
import PaginationTheme from '../Pagination/theme';
import PaperTheme from '../Paper/theme';
import PickerTheme from '../Picker/theme';
import PopoverTheme from '../Popover/theme';
import ProgressTheme from '../Progress/theme';
import RadioTheme from '../Radio/theme';
import SelectTheme from '../Select/theme';
import SliderTheme from '../Slider/theme';
import SnackbarTheme from '../Snackbar/theme';
import StepperTheme from '../Stepper/theme';
import SubHeaderTheme from '../SubHeader/theme';
import SwitchTheme from '../Switch/theme';
import Tabs from '../Tabs/theme';
import TextField from '../TextField/theme';
import ColorTheme from './colorTheme';
import light from './light';
import dark from './dark';

const themes = [
  BaseTheme, AppBarTheme, AvatarTheme, BadgeTheme, BottomNavTheme,
  BottomSheetTheme, BreadcrumbsTheme, ButtonTheme, CardTheme, CheckboxTheme,
  ChipTheme, DataTableTheme, DialogTheme, DividerTheme,
  DrawerTheme, GradListTheme, SliderTheme,
  ListTheme, PaginationTheme, PaperTheme, PickerTheme,
  PopoverTheme, ProgressTheme, RadioTheme, SnackbarTheme,
  SelectTheme, StepperTheme, SubHeaderTheme, SwitchTheme, Tabs, TextField, ColorTheme
];

const vars = {
  light,
  dark
};

function getThemeStyle () {
  const themeId = 'muse-theme';
  let styleEl = document.getElementById(themeId);
  if (styleEl) return styleEl;
  styleEl = document.createElement('style');
  styleEl.id = themeId;
  document.body.appendChild(styleEl);
  return styleEl;
}

export default {
  addCreateTheme (theme) {
    themes.push(theme);
    return this;
  },
  add (name, varObj = {}, extendName = 'light') {
    const theme = {
      name,
      ...vars[extendName],
      ...varObj
    };
    vars[name] = theme;
    return this;
  },
  use (name) {
    const themeEl = getThemeStyle();
    themeEl.innerHTML = themes.map((theme) => theme(vars[name], vars[name].type, name)).join(' ');
  }
};
