import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../../shared/pipes/toggle-case.pipe';
import { heroes } from '../../data/hero';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../models/hero';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroFilterPipe,
  ],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  isUpperCase = signal(false);
  name = signal('Carmen Ansio');
  heroes = signal(heroes);
  sortByKey = signal<keyof Hero | null>(null);
  searchTerm = signal('');

  toggleCase() {
    this.isUpperCase.update((oldState) => !oldState);
  }

  sortBy(key: keyof Hero) {
    this.sortByKey.set(key);
  }

  search(term: string) {
    this.searchTerm.set(term);
  }
}
