import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import localePtBR from '@angular/common/locales/pt';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";

import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { ContactModule } from './pages/contact/contact.module';
import { PortifolioModule } from './pages/portifolio/portifolio.module';

registerLocaleData(localePtBR);

const maskConfig = {};
const toastrConfig = { timeOut: 1000, positionClass: 'toast-top-right', preventDuplicates: true };

@NgModule({
  declarations: [ AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  imports: [
    //main
    BrowserModule,
    AppRoutingModule,
    // RouterModule,
    BrowserAnimationsModule,
    //libs
    NgxSpinnerModule,
    ToastrModule.forRoot(toastrConfig),
    NgxMaskDirective,
    //componentsModule
    HomeModule,
    AboutModule,
    ContactModule,
    PortifolioModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideHttpClient(withInterceptorsFromDi()),
    provideToastr(toastrConfig),
    provideNgxMask(maskConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
