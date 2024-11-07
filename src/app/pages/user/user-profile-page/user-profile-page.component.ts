import { Component } from '@angular/core';
import { UserProfileComponent } from "../../../components/user/profile/user-profile.component";
import { NavBarComponent } from '../../../sharedComponents/nav-bar/nav-bar.component';

@Component({
  selector: 'app-user-profile-page',
  standalone: true,
  imports: [UserProfileComponent,NavBarComponent],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.css'
})
export class UserProfilePageComponent {

}
