import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortifolioComponent } from './portifolio.component';

const routes: Routes = [
  { path: '', component: PortifolioComponent, data: { animation: 'PortifolioPage' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
