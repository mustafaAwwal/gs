import {Routes} from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
export const HomeRoutes:Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'homePage'
    },
    {
        path: 'homePage',
        children: [
            {
                path:'',
                component: HomePageComponent
            }
        ]
    }
]