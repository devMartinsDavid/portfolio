import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  yearsProgramation?: number;
  yearBirth?: number;
  
  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    const dataAtual = new Date();
    
    this.yearsProgramation = dataAtual.getFullYear() - 2022;
    this.yearBirth = dataAtual.getFullYear() - 2000;
    
    this.title.setTitle('DevMartins | Sobre');
  }

}
