import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: '',
        loadChildren: 'src/app/modules/home/home.module#HomeModule'
    }
]