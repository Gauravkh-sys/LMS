import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandentryComponent } from './components/landentry/landentry.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WingMasterComponent } from './components/masters/wing-master/wing-master.component';
import { AreaMasterComponent } from './components/masters/area-master/area-master.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'wingmaster',
        component:WingMasterComponent
    },
    {
        path:'areamaster',
        component:AreaMasterComponent
    }
];
