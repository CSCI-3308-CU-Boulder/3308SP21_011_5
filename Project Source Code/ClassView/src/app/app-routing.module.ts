import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';     // Add your component here
import {LoginComponent} from './auth/login/login.component'
import {LoggedInComponent} from './components/logged-in/logged-in.component'
import {ProfileComponent} from './components/profile/profile.component'
import { PostMakerComponent } from './components/post-maker/post-maker.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

//This is my case 
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'loggedIn',
        component: LoggedInComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path:'postMaker',
        component: PostMakerComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }