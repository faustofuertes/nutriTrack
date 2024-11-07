import { Component } from '@angular/core';
import { NavBarComponent } from '../../sharedComponents/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavBarComponent, RouterLink,CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  userName: string | null = null; // Variable para almacenar el nombre del usuario

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserName();
  }

  loadUserName(): void {
    const userId = localStorage.getItem('userToken');
    if (userId) {
      this.userService.getUserById(userId).subscribe({
        next: (userData: User) => {
          this.userName = userData.name; // Guarda el nombre del usuario
        },
        error: (error) => {
          console.error('Error al obtener los datos del usuario:', error);
        }
      });
    }
  }
}
