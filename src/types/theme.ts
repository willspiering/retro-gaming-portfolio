export interface ThemeColors {
  primary: string;
  "primary-content": string;
  secondary: string;
  "secondary-content": string;
  accent: string;
  "accent-content": string;
  neutral: string;
  "neutral-content": string;
  "base-100": string;
  "base-200": string;
  "base-300": string;
  "base-content": string;
  info: string;
  "info-content": string;
  success: string;
  "success-content": string;
  warning: string;
  "warning-content": string;
  error: string;
  "error-content": string;
}

export interface ThemeSettings {
  "--rounded-box": string;
  "--rounded-btn": string;
  "--rounded-badge": string;
  "--animation-btn": string;
  "--animation-input": string;
  "--btn-text-case": string;
  "--btn-focus-scale": string;
  "--border-btn": string;
  "--tab-border": string;
  "--tab-radius": string;
}

export interface Theme extends ThemeColors, ThemeSettings {}

export interface AllThemes {
  [themeName: string]: Theme;
}
