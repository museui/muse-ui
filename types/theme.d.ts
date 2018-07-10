export interface ThemeOptions {
  type?: string;
  primary?: string;
  secondary?: string;
  success?: string;
  warning?: string;
  info?: string;
  error?: string;
  track?: string;
  text?: {
    primary?: string;
    secondary?: string;
    alternate?: string;
    disabled?: string;
    hint?: string;
  };
  divider?: string;
  background?: {
    paper?: string;
    chip?: string;
    default?: string;
  };
}
export type ThemeType = 'dark' | 'light';

export interface ThemeFunction {
  (theme: ThemeOptions, type: ThemeType, name: string): void;
}

export interface MuTheme {
  addCreateTheme(theme: ThemeFunction): MuTheme;
  use(name: string): MuTheme;
  add(name: string, options: ThemeOptions, extendName: string): MuTheme;
  generate(name: string): string;
}
