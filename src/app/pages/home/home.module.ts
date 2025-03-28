import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    //main
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
