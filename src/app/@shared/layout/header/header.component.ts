// Angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages: string[] = ['en', 'es'];

  constructor() { }

  ngOnInit(): void {
  }

  onLanguageSelect({ value: language }) {
    //this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }

}
