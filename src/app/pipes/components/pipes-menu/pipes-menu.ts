import { Component } from '@angular/core';
import routes from '../../pipes.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pipes-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './pipes-menu.html',
})
export class PipesMenu {
  routes =
    routes[0]?.children?.map(({ path, title }) => ({
      path: path ?? '',
      title: title?.toString() ?? '',
    })) ?? [];
}
