import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector:'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

  public  menuItems=routes
    .map(route=> route.children ?? [])
    .flat()
    .filter(route=> route && route.path)

  
  constructor(){

    // const homeRoutes = routes
    // .map(route=> route.children ?? [])
    // .flat()
    // .filter(route=> route && route.path)

    // console.log(homeRoutes);
  }
}
