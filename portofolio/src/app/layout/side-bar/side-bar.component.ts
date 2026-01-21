import { Component, effect, signal } from '@angular/core';
import { TranslationService } from '../../services/translate.service';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-side-bar',
  imports: [TranslateModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  currentLang$ = signal<any>('');
  constructor(private translationService: TranslationService) {
    effect(() => {
      this.currentLang$.set(this.translationService.getCurrentLang());
    });
  }

  changeLang() {
    const lang = this.currentLang$() == 'ar' ? 'en' : 'ar';
    this.translationService.changeLang(lang);
  }
}
