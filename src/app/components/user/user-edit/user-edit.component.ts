import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';
import * as nutritionUtils from '../../../utils/nutrtion.utils'

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {





  editForm: FormGroup;
  userId: string | null = null;
 
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(10)]],
      weight: [null, [Validators.required, Validators.min(40)]],
      height: [null, [Validators.required, Validators.min(100)]],
      gender: ['', Validators.required]
    });
  }
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      // Obtener el ID del usuario desde la URL
      this.userId = paramMap.get('id');
      if (this.userId) {
        // Llamar al servicio para obtener los datos del usuario por su ID
        this.userService.getUserById(this.userId).subscribe({
          next: (userData: User) => {
            // Cargar los datos del usuario en el formulario
            this.editForm.patchValue(userData);
          },
          error: (error) => {
            console.error('Error al obtener los datos del usuario:', error);
          }
        });
      }
    });
  }
 
  onSubmit(): void {
    if (this.editForm.invalid) return;
 
    const confirmUpdate = confirm("¿Estás seguro de que deseas actualizar tus datos?");
    if (confirmUpdate) {
      const updatedUser: User = this.editForm.getRawValue();
  //    Calcular las calorías necesarias
    const calories = nutritionUtils.calcularTMB(updatedUser);
    updatedUser.caloriesNeeded = calories;
      this.userService.modifyUser(this.userId!, updatedUser).subscribe({
        next: () => {
          alert('Perfil actualizado correctamente');
          this.router.navigate(['/userProfile']);
        },
        error: (error) => {
          console.error('Error al actualizar el perfil:', error);
          alert('Error al actualizar el perfil');
        }
      });
    }
  }



}
 
