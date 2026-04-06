import { Routes } from '@angular/router';
import { Login} from './pages/auth/login/login';
import { MainLayout } from './layout/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';
import { Pacientes } from './pages/pacientes/pacientes/pacientes';

export const routes: Routes = [
    {path: 'login', component: Login},
    { 
        path: '', 
        component: MainLayout,
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'pacientes', component: Pacientes },
        ]
    }
];
