import { Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars';
import { RegistrationComponent } from './components/registration/registration'


export const routes: Routes = [
    { path: '', component: CarsComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: '**', redirectTo: '' }
];
