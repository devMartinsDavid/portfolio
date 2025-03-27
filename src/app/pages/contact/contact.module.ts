import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';




@NgModule({
  declarations: [ContactComponent],
  imports: [
    //main
    CommonModule,
    ContactRoutingModule,
    FormsModule
  ]
})
export class ContactModule { }
