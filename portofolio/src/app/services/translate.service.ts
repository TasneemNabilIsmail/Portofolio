import { TranslateService } from '@ngx-translate/core';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private defaultLang = 'en';
  currentLang$ = signal<string>('en');
  constructor(private translate: TranslateService) {
    // Set default language

    // Optional: persist last used language
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.translate.use(savedLang);
      this.updateDirection(savedLang);
    } else {
      this.updateDirection(this.defaultLang);
    }
  }

  // Change language dynamically
  changeLang(lang: string) {
    this.currentLang$.set(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.updateDirection(lang);
  }

  // Get current language
  getCurrentLang() {
    return this.currentLang$();
  }

  // Update page direction (LTR / RTL)
  private updateDirection(lang: string) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
