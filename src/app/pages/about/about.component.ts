import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit, OnDestroy {
  yearsProgramation!: number;
  birthday!: number;
  isLargeScreen: boolean  = false;

  constructor(private title: Title, private cdRef: ChangeDetectorRef, private translate: TranslateService) { }

  ngOnInit(): void {
    this.title.setTitle('DevMartins | Sobre');
    this.calculateYears();

    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  calculateYears(): void {
    const currentDate = new Date();
    let birthDate = new Date('2000-06-20T17:00:00');
    let startProgramming = new Date('2022-08-08T06:00:00');

    this.birthday = this.calculateAge(birthDate, currentDate);
    this.yearsProgramation = this.calculateAge(startProgramming, currentDate);
  }

  calculateAge(startDate: Date, endDate: Date): number {
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    const age = endYear - startYear;

    if (endDate.getMonth() < startDate.getMonth() || (endDate.getMonth() === startDate.getMonth() && endDate.getDate() < startDate.getDate())
    ) {
      return age - 1;
    }

    return age;
  }

  checkScreenSize() {
    this.isLargeScreen = (window.innerWidth >= 1155 && window.innerWidth <= 1200) || window.innerWidth >= 1545;
    //force detection changes
    this.cdRef.detectChanges();
  }

  ngOnDestroy() { window.removeEventListener('resize', this.checkScreenSize.bind(this)); }

}
