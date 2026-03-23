import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/hero';

@Pipe({
  name: 'heroColor',
})
export class HeroColorPipe implements PipeTransform {
  transform(value: Color): string {
    switch (value) {
      case Color.black:
        return 'Negro';
      case Color.blue:
        return 'Azul';
      case Color.green:
        return 'Verde';
      case Color.red:
        return 'Rojo';
      default:
        return '';
    }
  }
}
