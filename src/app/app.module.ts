import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

//main
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

//libs
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import localePtBR from '@angular/common/locales/pt';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ToastrModule, provideToastr } from 'ngx-toastr';

//pages
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
    BrowserAnimationsModule,
    //libs
    ToastrModule.forRoot(toastrConfig),
    NgxMaskDirective,
    //componentsModule
    LayoutModule,
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
    provideNgxMask(maskConfig),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
