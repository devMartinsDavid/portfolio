import { Component, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ControllerBase } from '@app/controller/controller.base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterContentChecked {
  //controle de animação
  animationPlayed: boolean = false;

  greetingMessege:string = '';

  constructor(private title: Title, private controllerbase: ControllerBase) { }

  ngOnInit(): void {
    this.title.setTitle('DevMartins | Home');
    this.playAnimations();
  }

  ngAfterViewInit(): void {
    this.playAnimations();
  }

  ngAfterContentChecked(): void {
    this.saudations();
  }

  private playAnimations(): void {
    if (!this.animationPlayed) {
      const palavra1: HTMLElement | null = document.querySelector('.palavra-1');
      const palavra2: HTMLElement | null = document.querySelector('.palavra-2');
      const palavra3: HTMLElement | null = document.querySelector('.palavra-3');
      const subtitle: HTMLElement | null = document.querySelector('.subtitle');

      if (palavra1 && palavra2 && palavra3 && subtitle) {
        setTimeout(() => {
          palavra1.style.animation = 'slideFromRight 2s ease forwards';
          palavra1.style.opacity = '1';
        }, 1000);

        setTimeout(() => {
          palavra2.style.animation = 'slideFromTop 2s ease forwards';
          palavra2.style.opacity = '1';
        }, 2000);

        setTimeout(() => {
          palavra3.style.animation = 'slideFromLeft 2s ease forwards';
          palavra3.style.opacity = '1';
        }, 3000);

        setTimeout(() => {
          subtitle.style.animation = 'afterTitle 2s ease-out forwards';
          subtitle.style.opacity = '1';
        }, 4000);

        this.animationPlayed = true;
      }
    }
  }

  private saudations (): void { this.greetingMessege = this.controllerbase.getMessage(); }

}

