import Vue, { PluginObject } from 'vue';
import { MuTheme } from './theme';

export interface InstallationOptions {}

/** The version of muse-ui */
export const version: string;

/**
 * Install all muse-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(MuseUI)` to install.
 */
export function install (vue: typeof Vue, options?: InstallationOptions): void;
export const Colors: object;
export const theme: MuTheme;

// components
export const Alert: PluginObject<any>;
export const AppBar: PluginObject<any>;
export const AutoComplete: PluginObject<any>;
export const Avatar: PluginObject<any>;
export const Badge: PluginObject<any>;
export const BottomNav: PluginObject<any>;
export const BottomSheet: PluginObject<any>;
export const Breadcrumbs: PluginObject<any>;
export const Button: PluginObject<any>;
export const Card: PluginObject<any>;
export const Carousel: PluginObject<any>;
export const Checkbox: PluginObject<any>;
export const Chip: PluginObject<any>;
export const DateInput: PluginObject<any>;
export const DataTable: PluginObject<any>;
export const Dialog: PluginObject<any>;
export const Divider: PluginObject<any>;
export const Drawer: PluginObject<any>;
export const ExpansionPanel: PluginObject<any>;
export const Form: PluginObject<any>;
export const Grid: PluginObject<any>;
export const GridList: PluginObject<any>;
export const Helpers: PluginObject<any>;
export const Icon: PluginObject<any>;
export const List: PluginObject<any>;
export const LoadMore: PluginObject<any>;
export const Menu: PluginObject<any>;
export const Pagination: PluginObject<any>;
export const Paper: PluginObject<any>;
export const Picker: PluginObject<any>;
export const Popover: PluginObject<any>;
export const Progress: PluginObject<any>;
export const Radio: PluginObject<any>;
export const Select: PluginObject<any>;
export const SlidePicker: PluginObject<any>;
export const Slider: PluginObject<any>;
export const Snackbar: PluginObject<any>;
export const Stepper: PluginObject<any>;
export const SubHeader: PluginObject<any>;
export const Switch: PluginObject<any>;
export const Tabs: PluginObject<any>;
export const TextField: PluginObject<any>;
export const Tooltip: PluginObject<any>;
