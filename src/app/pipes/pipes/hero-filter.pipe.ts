import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../models/hero';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {
  transform(value: Hero[], search: string): Hero[] {
    if (!search) {
      return value;
    }

    const searchToLower = search.toLowerCase();

    return value.filter((hero) => hero.name.toLowerCase().includes(searchToLower));
  }
}
