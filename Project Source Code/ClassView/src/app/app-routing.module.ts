import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';     // Add your component here
import { RegisterComponent } from './components/register/register.component';  // Add your component here
import {LoginComponent} from './components/login/login.component'
import {LoggedInComponent} from './components/logged-in/logged-in.component'
import {ProfileComponent} from './components/profile/profile.component'
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import {AuthGuard} from './guard/auth.guard'

//This is my case 
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'verify-email',
        component: VerifyEmailComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'loggedIn',
        component: LoggedInComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }