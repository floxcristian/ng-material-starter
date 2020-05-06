// Angular
import { Component, OnInit } from '@angular/core';
// Translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet><select #langSelect (change)="changeLang(langSelect.value)"><option *ngFor="let lang of langs" [value]="lang">{{lang}}</option></select> <div>{{"EMAIL" | translate}}</div>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'material-demo';
  loader: boolean;
  langs: string[] = [];

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();

  }
  ngOnInit(): void {

  }

  changeLang(lang: string){
    this.translate.use(lang);
  }

}
