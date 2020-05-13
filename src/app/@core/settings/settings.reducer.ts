// ngrx
import { Action, createReducer, on } from '@ngrx/store';
import * as SettingsActions from './settings.actions';
export const NIGHT_MODE_THEME = 'BLACK-THEME';

export type Language = 'en' | 'es';

export interface SettingsState {
    language: string;
    theme: string;
    autoNightMode: boolean;
    nightTheme: string;
    stickyHeader: boolean;
    pageAnimations: boolean;
    pageAnimationsDisabled: boolean;
    elementsAnimations: boolean;
    hour: number;
}

export const initialState: SettingsState = {
    language: 'en',
    theme: 'DEFAULT-THEME',
    autoNightMode: false,
    nightTheme: NIGHT_MODE_THEME,
    stickyHeader: true,
    pageAnimations: true,
    pageAnimationsDisabled: false,
    elementsAnimations: true,
    hour: 0
};

const _settingsReducer = createReducer(
    initialState,
    on(
        SettingsActions.changeLanguage,
        SettingsActions.changeTheme,
        SettingsActions.changeAutoNightMode,
        SettingsActions.changeStickyHeader,
        SettingsActions.changeAnimationsPage,
        SettingsActions.changeAnimationsElements,
        SettingsActions.changeHour,
        (state, action) => ({ ...state, ...action })
    ),
    on(SettingsActions.changeAnimationsPageDisabled, (state, { pageAnimationsDisabled }) => ({
        ...state,
        pageAnimationsDisabled,
        pageAnimations: false
    })
    )
);

export function settingsReducer(state, action) {
    return _settingsReducer(state, action);
}