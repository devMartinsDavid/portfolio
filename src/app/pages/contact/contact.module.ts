import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [ContactComponent],
  imports: [
    //main
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    TranslateModule
  ]
})
export class ContactModule { }
