import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortifolioComponent } from './portifolio.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [PortifolioComponent],
  imports: [
    //main
    CommonModule,
    PortfolioRoutingModule,
    TranslateModule
  ]
})
export class PortifolioModule { }
