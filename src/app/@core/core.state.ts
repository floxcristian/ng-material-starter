// ngrx
import { ActionReducerMap, MetaReducer, createFeatureSelector } from '@ngrx/store';
//import { routerReducer, RouterReducerState } from '@ngrx/router-store';
// state & reducer
import { settingsReducer, SettingsState } from './settings/settings.reducer';
// Envs
import { environment } from '@env/environment';

export interface State {
  settings: SettingsState;
  //router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  settings: settingsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
