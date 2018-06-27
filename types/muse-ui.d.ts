import Vue, { PluginObject, PluginFunction } from 'vue';
import { MuTheme } from './theme';

/** The version of muse-ui */
export const version: string;

/**
 * Install all muse-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(MuseUI)` to install.
 */
export const install: PluginFunction<never>;
export const Colors: { [key: string]: string };
export const theme: MuTheme;

// components
export const Alert: PluginObject<never>;
export const AppBar: PluginObject<never>;
export const AutoComplete: PluginObject<never>;
export const Avatar: PluginObject<never>;
export const Badge: PluginObject<never>;
export const BottomNav: PluginObject<never>;
export const BottomSheet: PluginObject<never>;
export const Breadcrumbs: PluginObject<never>;
export const Button: PluginObject<never>;
export const Card: PluginObject<never>;
export const Carousel: PluginObject<never>;
export const Checkbox: PluginObject<never>;
export const Chip: PluginObject<never>;
export const DateInput: PluginObject<never>;
export const DataTable: PluginObject<never>;
export const Dialog: PluginObject<never>;
export const Divider: PluginObject<never>;
export const Drawer: PluginObject<never>;
export const ExpansionPanel: PluginObject<never>;
export const Form: PluginObject<never>;
export const Grid: PluginObject<never>;
export const GridList: PluginObject<never>;
export const Helpers: PluginObject<never>;
export const Icon: PluginObject<never>;
export const List: PluginObject<never>;
export const LoadMore: PluginObject<never>;
export const Menu: PluginObject<never>;
export const Pagination: PluginObject<never>;
export const Paper: PluginObject<never>;
export const Picker: PluginObject<never>;
export const Popover: PluginObject<never>;
export const Progress: PluginObject<never>;
export const Radio: PluginObject<never>;
export const Select: PluginObject<never>;
export const SlidePicker: PluginObject<never>;
export const Slider: PluginObject<never>;
export const Snackbar: PluginObject<never>;
export const Stepper: PluginObject<never>;
export const SubHeader: PluginObject<never>;
export const Switch: PluginObject<never>;
export const Tabs: PluginObject<never>;
export const TextField: PluginObject<never>;
export const Tooltip: PluginObject<never>;
