import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
} from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: 'Wences',
  gender: 'male',
};

const client2 = {
  name: 'Laura',
  gender: 'female',
};
@Component({
  selector: 'app-uncommon-page',
  imports: [
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  protected i18Map = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  protected pluralMap = {
    '=0': 'no hay clientes invitados',
    '=1': 'hay # cliente invitado',
    other: 'hay # clientes invitados',
  };

  protected profile = signal({
    name: 'Felipe',
    age: 70,
    address: 'Guadalajara, Jalisco',
  });

  protected client = signal(client1);
  protected clients = signal(['María', 'José', 'Luis', 'Rodolfo', 'Laura', 'Noemi']);

  protected myPromise: Promise<string> = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Data cargada');
    }, 3500);
  });

  protected myObservable = interval(1000).pipe(tap(console.log));

  toggleClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  deleteClient() {
    this.clients.update((prev) => prev.filter((_, index) => index > 0));
  }
}
