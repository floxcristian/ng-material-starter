// Angular
import { Component, OnInit } from '@angular/core';
//rxjs
import { Observable } from 'rxjs';
// ngrx
import { Store, select } from '@ngrx/store';
import * as SettingsActions from '@core/settings/settings.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages: string[] = ['en', 'es'];
  language$: Observable<string>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    //this.language$ = this.store.pipe(select(selectSettingsLanguage));
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(SettingsActions.changeLanguage({ language }));
  }

}
