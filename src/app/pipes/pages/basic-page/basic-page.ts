import { Component, effect, inject, signal } from '@angular/core';
import { LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';
import { LocaleService } from '../../../shared/locale/services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {
  localeService = inject(LocaleService);

  lowerName = signal<string>('wenceslao');
  upperName = signal<string>('WENCESLAO');
  titleName = signal<string>('WenCESLao REyeS');

  currentDate = signal<Date>(new Date());

  currentTimeEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.currentDate.set(new Date());
    }, 1000);

    onCleanup(() => clearInterval(interval));
  });
}
