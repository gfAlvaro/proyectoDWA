import { Routes } from '@angular/router';
import { SessionForm } from './session-form/session-form';
import { App } from './app';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'iniciar-sesion', component: SessionForm }
];
