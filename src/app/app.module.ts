import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import localePtBR from '@angular/common/locales/pt';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';

registerLocaleData(localePtBR);

const maskConfig = {};
const toastrConfig = { timeOut: 1000, positionClass: 'toast-top-right', preventDuplicates: true };

@NgModule({
  declarations: [
    AppComponent,
    PortifolioComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(toastrConfig),
    NgxMaskDirective,
    provideNgxMask(maskConfig)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideHttpClient(withInterceptorsFromDi()),
    provideToastr(toastrConfig),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
