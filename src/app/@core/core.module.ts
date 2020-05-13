// Angular
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxWebstorageModule } from 'ngx-webstorage';
// Interceptors
import { TokenInterceptor } from './interceptors/token/token.interceptor';
// Guards
// State management
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Environments
import { environment } from '@env/environment';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient]
      }
    }),
    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule .instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    // External
    NgxWebstorageModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
