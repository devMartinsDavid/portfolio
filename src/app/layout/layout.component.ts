import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { slideInLayoutAnimation } from '@app/animations';
import { ControllerBase } from '@app/controller/controller.base';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: false,
  animations: [slideInLayoutAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent extends ControllerBase implements OnInit {
  loading : boolean = false;

  constructor(private router: Router, private spinner: NgxSpinnerService) {
    super();
  }

  ngOnInit() {
    //spinner
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => this.spinner.hide(), 500);
      }
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
