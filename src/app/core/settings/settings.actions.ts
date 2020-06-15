// ngrx
import { createAction, props } from '@ngrx/store';
// Models
import { Language } from './settings.model';

export const changeLanguage = createAction(
    '[Settings] Change Language',
    props<{ language: Language }>()
);

export const changeTheme = createAction(
    '[Settings] Change Theme',
    props<{ theme: string }>()
);