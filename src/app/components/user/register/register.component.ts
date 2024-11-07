import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';
import * as nutritionUtils from '../../../utils/nutrtion.utils'
import { Meals } from '../../../interfaces/meals';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup

  // Inyectar el servicio en el constructor
  constructor(private fb: FormBuilder, private router: Router,
    private userService: UserService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(10)]],
      weight: [null, [Validators.required, Validators.min(40)]],
      height: [null, [Validators.required, Validators.min(100)]],
      gender: ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.registerForm.valid) {
      let calories = 0;
      const dataUser: User = this.registerForm.getRawValue();

      const newUser: User = {
        name: dataUser.name,
        surname: dataUser.surname,
        email: dataUser.email,
        password: dataUser.password,
        height: dataUser.height,
        weight: dataUser.weight,
        gender: dataUser.gender,
        age: dataUser.age
      }

      calories = nutritionUtils.calcularTMB(dataUser);

      newUser.caloriesNeeded = calories;

      // Llama al servicio para registrar el usuario y luego redirige
      this.userService.addUser(newUser).subscribe({
        next: () => {
          this.router.navigate(['/userProfile']); // Redirige al perfil de usuario
        },
        error: (error) => {
          console.error('Error registrando usuario:', error);
        },
      });
    }
  }

  togglePassword() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
}
