import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-portifolio',
    templateUrl: './portifolio.component.html',
    styleUrls: ['./portifolio.component.css'],
    standalone: false
})
export class PortifolioComponent implements OnInit {

  projects = [
    { img: 'assets/images/img-1.jpg', title: 'portfolio.personalBudgetApp', desc: 'portfolio.personalBudgetDesc', tech: 'Angular, Bootstrap, CSS.', link: 'https://devmartinsdavid.github.io/personal-budget/' },
    { img: 'assets/images/img-3.jpg', title: 'portfolio.testGame', desc: 'portfolio.testGameDesc', tech: 'JavaScript and CSS.', link: 'https://devmartinsdavid.github.io/jogo-do-mosquito/' },
    { img: 'assets/images/img-4.jpg', title: 'portfolio.bodyMassCalculator', desc: 'portfolio.bodyMassDesc', tech: 'JavaScript, GSAP, and CSS.', link: 'https://devmartinsdavid.github.io/calculo-massa-corporal/' },
    { img: 'assets/images/img-2.jpg', title: 'portfolio.productRegistration', desc: 'portfolio.productRegDesc', tech: 'Angular, CSS.', link: 'https://devmartinsdavid.github.io/Estudos-Angular/' },
    { img: 'assets/images/img-5.jpg', title: 'portfolio.underMaintenance', desc: '', tech: '', link: '' },
    { img: 'assets/images/img-6.jpg', title: 'portfolio.underMaintenance', desc: '', tech: '', link: '' },
    { img: 'assets/images/blog2.jpg', title: 'portfolio.underMaintenance', desc: '', tech: '', link: '' },
    { img: 'assets/images/img-6.jpg', title: 'portfolio.underMaintenance', desc: '', tech: '', link: '' },
    { img: 'assets/images/blog2.jpg', title: 'portfolio.underMaintenance', desc: '', tech: '', link: '' },
    { img: 'assets/images/img-6.jpg', title: 'portfolio.underMaintenance', desc: '', tech: '', link: '' }
  ];

  visibleProjects: number = 6;

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('DevMartins | Portifolio');
    this.adjustProjects()
  }

  @HostListener('window:resize', ['$event'])
  onResize() { this.adjustProjects() }

  adjustProjects() {
    //responsiveness
    const screenWidth = window.innerWidth;

    if (screenWidth > 1165 && screenWidth < 1200){
      this.visibleProjects = 8;
    } else if (screenWidth >= 1200 && screenWidth <= 1575) {
      this.visibleProjects = 6;
    } else if (screenWidth >= 1576) {
      this.visibleProjects = 8;
    } else if (screenWidth >= 768) {
      this.visibleProjects = 6;
    } else {
      this.visibleProjects = 4;
    }
  }

  loadMore():any { this.visibleProjects += 5; }
}
