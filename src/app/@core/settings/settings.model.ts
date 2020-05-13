export const NIGHT_MODE_THEME = 'BLACK-THEME';

export type Language = 'en' | 'es';

export interface SettingsState {
  language: Language;
  theme: string; //?
  nightTheme: string; //?

  
  // animations:
  pageAnimations: boolean; // animacion pagina completa
  pageAnimationsDisabled: boolean;
  elementsAnimations: boolean;
  hour: number;
}