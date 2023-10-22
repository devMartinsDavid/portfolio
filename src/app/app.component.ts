import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInLayoutAnimation } from './animations';
import { ControllerBase } from './controller/controller.base';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInLayoutAnimation ]
})
export class AppComponent extends ControllerBase {

  constructor() {
    super();
  }

  ngOnInit() {}
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animation;
  }

  scrollTop(){
    window.scrollTo(0, 0);
  }
}
