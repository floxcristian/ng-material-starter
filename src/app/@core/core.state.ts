// ngrx
import { ActionReducerMap, MetaReducer, createFeatureSelector } from '@ngrx/store';
//import { routerReducer, RouterReducerState } from '@ngrx/router-store';
// state & reducer
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.model';
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
