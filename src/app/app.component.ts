// Angular
import { Component, OnInit } from "@angular/core";
// Translate
import { TranslateService } from "@ngx-translate/core";
// rxjs
import { Observable } from "rxjs";
// ngrx
import { Store, select } from "@ngrx/store";

@Component({
  selector: "app-root",
  template:
    '<router-outlet></router-outlet><select #langSelect (change)="changeLang(langSelect.value)"><option *ngFor="let lang of langs" [value]="lang">{{lang}}</option></select> <div>{{"EMAIL" | translate}}</div>',
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "material-demo";
  loader: boolean;
  langs: string[] = [];

  language$: Observable<string>;

  constructor(private translate: TranslateService, private store: Store) {
    this.translate.addLangs(["es", "en"]);
    this.translate.setDefaultLang("en");
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|es/) ? browserLang : "en");

    this.langs = this.translate.getLangs();
  }

  ngOnInit(): void {
    throw new Error("an error....");
    /*
    try {
      throw new Error("an error....");
    } catch (error) {
      console.log(error);
    }*/
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
