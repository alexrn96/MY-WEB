import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../shared/menu/menu.component';

@Component({
  standalone: true,
  imports: [RouterModule, MenuComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export default class HomeComponent {

}
