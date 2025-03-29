import { Component } from '@angular/core';
import { ControllerBase } from './controller/controller.base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent extends ControllerBase {

  title: string = 'DevMartins';
  constructor() { super(); }
}
