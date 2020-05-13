// ngrx
import { createReducer, on } from '@ngrx/store';
import { SettingsState, NIGHT_MODE_THEME } from './settings.model';
import * as SettingsActions from './settings.actions';

export const initialState: SettingsState = {
    language: 'en',
    theme: 'DEFAULT-THEME',
    nightTheme: NIGHT_MODE_THEME
};

const _settingsReducer = createReducer(
    initialState,
    on(
        SettingsActions.changeLanguage,
        SettingsActions.changeTheme,
        (state, action) => ({ ...state, ...action })
    )
);

export function settingsReducer(state, action) {
    return _settingsReducer(state, action);
}