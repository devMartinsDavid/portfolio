import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    LanguageSelectorComponent
  ]
})
export class SharedModule { }
