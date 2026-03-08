import { Injectable, signal } from '@angular/core';
import { AvailableLocale } from '../models/available-locale';

function getAvailableLocaleFromLocalStorage(): AvailableLocale {
  let locale = localStorage.getItem('locale');

  if (locale === 'es-MX' || locale === 'en' || locale === 'fr') {
    return locale;
  }

  return 'es-MX';
}

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private _currentLocale = signal<AvailableLocale>(getAvailableLocaleFromLocalStorage());
  public currentLocale = this._currentLocale.asReadonly();

  changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    this._currentLocale.set(locale);
    window.location.reload();
  }
}
