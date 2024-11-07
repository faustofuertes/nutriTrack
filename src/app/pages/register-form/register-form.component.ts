import { Component } from '@angular/core';
import { NavBarComponent } from "../../sharedComponents/nav-bar/nav-bar.component";
import { RegisterComponent } from '../../components/user/register/register.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [NavBarComponent, RegisterComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

}

