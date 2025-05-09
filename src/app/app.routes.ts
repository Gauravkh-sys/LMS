import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandentryComponent } from './components/landentry/landentry.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WingMasterComponent } from './components/masters/wing-master/wing-master.component';
import { AreaMasterComponent } from './components/masters/area-master/area-master.component';
import { VoilationMasterComponent } from './components/masters/voilation-master/voilation-master.component';
import { UsermanagementComponent } from './components/usermanagement/usermanagement.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { GeolocationComponent } from './components/masters/geolocation/geolocation.component';
import { PresentationviewerComponent } from './components/masters/presentationviewer/presentationviewer.component';

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
    },
    {
        path:'voilations',
        component:VoilationMasterComponent
    },
    {
        path:'usermanagement',
        component:UsermanagementComponent
    },
    {
        path:'profile',
        component:UserprofileComponent
    },
    {
        path:'geolocation',
        component:GeolocationComponent
    },
    {
        path:'presentationView',
        component:PresentationviewerComponent
    }

];
