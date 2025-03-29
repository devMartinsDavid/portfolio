import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortifolioComponent } from './portifolio.component';



@NgModule({
  declarations: [PortifolioComponent],
  imports: [
    //main
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortifolioModule { }
