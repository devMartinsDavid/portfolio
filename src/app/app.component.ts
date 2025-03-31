import { Component } from '@angular/core';
import { ControllerBase } from './controller/controller.base';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent extends ControllerBase {

  title: string = 'DevMartins';
  constructor(private translateService: TranslateService) { super(translateService); }
}
