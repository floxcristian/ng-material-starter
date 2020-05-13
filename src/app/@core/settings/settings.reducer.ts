// ngrx
import { createReducer, on } from '@ngrx/store';
import { SettingsState, NIGHT_MODE_THEME } from './settings.model';
import * as SettingsActions from './settings.actions';

export const initialState: SettingsState = {
    language: 'en',
    theme: 'DEFAULT-THEME',
    nightTheme: NIGHT_MODE_THEME,
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