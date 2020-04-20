// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxWebstorageModule } from 'ngx-webstorage';
// Interceptors
import { TokenInterceptor } from './interceptors/token/token.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
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
