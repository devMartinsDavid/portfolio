import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {
  yearsProgramation!: number;
  birthday!: number;

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('DevMartins | Sobre');
    this.calculateYears();
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

  formatAge(age: number): string { return age === 1 ? age + ' year' : age + ' years'; }

  getFormattedAge(type: string): string { return type === 'birthday' ? this.formatAge(this.birthday) : this.formatAge(this.yearsProgramation); }


}
