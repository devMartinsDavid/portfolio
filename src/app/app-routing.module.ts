import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  {path: 'home', component: HomeComponent, data: { animation: 'HomePage' }},
  
  {path: 'sobre', component: AboutComponent, data: { animation: 'AboutPage' }},
  
  {path: 'blogs', component: BlogsComponent, data: { animation: 'BlogsPage' }},
  
  {path: 'contato', component: ContactComponent, data: { animation: 'ContactPage' }},
  
  {path: 'portifolio', component: PortifolioComponent, data: { animation: 'PortifolioPage' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
