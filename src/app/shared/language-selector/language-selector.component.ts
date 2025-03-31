import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
  standalone: false
})
export class LanguageSelectorComponent {
  dropdownOpen = false;
  currentLanguage = 'en';
  currentFlag = 'assets/images/eua.png';

  constructor(private translate: TranslateService) {
    // get language save on localstoage or default to 'en'
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.currentLanguage = savedLanguage;
    this.currentFlag = savedLanguage === 'pt' ? 'assets/images/Brazil.png' : 'assets/images/eua.png';
    this.translate.use(this.currentLanguage);
  }

  toggleDropdown() { this.dropdownOpen = !this.dropdownOpen; }

  changeLanguage(lang: string, flag: string) {
    this.currentLanguage = lang;
    this.currentFlag = flag;
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
    this.dropdownOpen = false;
  }
}
