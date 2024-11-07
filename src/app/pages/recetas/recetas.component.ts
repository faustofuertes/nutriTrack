import { Component } from '@angular/core';
import { NavBarComponent } from '../../sharedComponents/nav-bar/nav-bar.component';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {

}
