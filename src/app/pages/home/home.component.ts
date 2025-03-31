import { Component, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ControllerBase } from '@app/controller/controller.base';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent extends ControllerBase implements OnInit, AfterViewInit, AfterContentChecked {

  animationPlayed: boolean = false;
  greetingMessage:string = '';

  constructor(private title: Title, private translateService: TranslateService) {
    super(translateService);
  }

  ngOnInit(): void {
    this.title.setTitle('DevMartins | Home');
    this.animationPlayed = true;
  }

  ngAfterViewInit(): void { this.animationPlayed = true; }

  ngAfterContentChecked(): void { this.setGreetingMessage(); }

  private setGreetingMessage(): void { this.greetingMessage = this.getMessage(); }

}

