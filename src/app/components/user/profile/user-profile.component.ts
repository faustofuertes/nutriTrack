import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const id = localStorage.getItem('userToken');
  
    if (id) {
      this.userService.getUserById(id).subscribe({
        next: (userData) => {
          this.user = userData;
        },
        error: (error) => {
          console.error('Error al obtener los datos del usuario:', error);
        }
      });
    } else {
      console.error('No se encontró el token del usuario en localStorage');
    }
  }
  
}

