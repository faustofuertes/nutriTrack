import { Routes } from '@angular/router';
import { AlimentosComponent } from './pages/alimentos/alimentos.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RecetasComponent } from './pages/recetas/recetas.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { UserProfilePageComponent } from './pages/user/user-profile-page/user-profile-page.component';
import { LoginComponent } from './components/user/login/login.component';
import { MyNutriTrackComponent } from './pages/my-nutri-track/my-nutri-track.component';

export const routes: Routes = [
    { path: 'alimentos', component: AlimentosComponent },
    { path: 'inicio', component: LandingComponent },
    { path: 'recetas', component: RecetasComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'userProfile', component: UserProfilePageComponent },
    { path: 'my-Nutri-Track', component: MyNutriTrackComponent },
    {
        path: 'login',
        component: LoginComponent, // Ruta pública para el login
    },
    { path: '', component: LandingComponent }
];
