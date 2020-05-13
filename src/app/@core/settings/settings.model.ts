export const NIGHT_MODE_THEME = 'BLACK-THEME';

export type Language = 'en' | 'es';
// 'DEFAULT_THEME'

export interface SettingsState {
  language: Language;
  theme: string; //?
  nightTheme: string; //?
}