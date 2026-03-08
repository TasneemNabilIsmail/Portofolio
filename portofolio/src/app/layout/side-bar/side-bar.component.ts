import { Component, effect, signal } from '@angular/core';
import { TranslationService } from '../../services/translate.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  imports: [TranslateModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  currentLang$ = signal<any>('');
  items= signal<{ title: string; url: string; icon: string }[]>([]);
  constructor(
    private translationService: TranslationService,
    private translateService: TranslateService,
  ) {
    effect(() => {
      this.currentLang$.set(this.translationService.getCurrentLang());
    });
  }

  ngOnInit() {
    this.prepareItems();
  }

  changeLang() {
    const lang = this.currentLang$() == 'ar' ? 'en' : 'ar';
    this.translationService.changeLang(lang);
    this.prepareItems();

  }

  prepareItems() {
    this.items.set([])
    this.translateService.get('portfolio.sideBar').subscribe((items) => {
      console.log('items ===>', items);
      this.items.set([...items])
    });
  }
}
