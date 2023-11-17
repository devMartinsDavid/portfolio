import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textToType: string = '';
  textContentTitle: string = 'Olá, sou o David Martins'; 
  intervalDurationTitle: number = 100;
  textToTypeSubtitle: string = ''; 
  textContentSubtitle: string = 'Desenvolvedor Web Full-Stack Júnior';
  intervalDurationSubtitle: number = 100;

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('DevMartins | Home');
  }
  ngAfterContentInit(): void {
    this.simulateTypingTitle();
    setTimeout(() => {
      this.simulateTypingSubtitle()
    },2000);
  }
  
  

  simulateTypingTitle(): void{
    const textArrayTitle = this.textContentTitle.split('');
    const sourceTitle = interval(this.intervalDurationTitle);

    const subscribeTitle = sourceTitle.subscribe(() => { 
      if(textArrayTitle.length > 0) { this.textToType += textArrayTitle.shift() || '';} 
      else { subscribeTitle.unsubscribe }
    });
  }
  simulateTypingSubtitle(): void{
    const textArraySubtitle = this.textContentSubtitle.split('');
    const soucerSubtitle = interval(this.intervalDurationSubtitle);

    const subscribeSubtitle = soucerSubtitle.subscribe(() => {
      if(textArraySubtitle.length > 0) { this.textToTypeSubtitle += textArraySubtitle.shift() || '';}
      else{ subscribeSubtitle.unsubscribe }
    });
  }


}
