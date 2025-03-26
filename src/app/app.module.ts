import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// Locale PT-BR
import localePtBR from '@angular/common/locales/pt';
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
registerLocaleData(localePtBR);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

import { ToastrModule, provideToastr } from 'ngx-toastr';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { NgxSpinnerModule, provideNgxSpinner } from "ngx-spinner";

const maskConfig: Partial<IConfig> = {};
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
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(toastrConfig),
    NgxMaskModule.forRoot(maskConfig)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideHttpClient(withInterceptorsFromDi()),
    provideClientHydration(),
    // Alternativa moderna para as configurações:
    // provideAnimations(),
    // provideToastr(toastrConfig),
    // provideNgxSpinner()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
