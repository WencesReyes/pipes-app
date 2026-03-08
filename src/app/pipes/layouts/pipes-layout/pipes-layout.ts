import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipesMenu } from '../../components/pipes-menu/pipes-menu';

@Component({
  selector: 'app-pipes-layout',
  imports: [RouterOutlet, PipesMenu],
  templateUrl: './pipes-layout.html',
})
export class PipesLayout {}
