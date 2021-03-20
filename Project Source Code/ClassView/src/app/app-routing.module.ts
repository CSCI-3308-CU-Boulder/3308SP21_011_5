import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';     // Add your component here
import { RegisterComponent } from './components/register/register.component';  // Add your component here
import {LoginComponent} from './components/login/login.component'
import {LoggedInComponent} from './components/logged-in/logged-in.component'
import {ProfileComponent} from './components/profile/profile.component'
import { PostMakerComponent } from './components/post-maker/post-maker.component';
import { PostPageComponent } from './components/post-page/post-page.component';

//This is my case 
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
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
        component: LoggedInComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path:'postMaker',
        component: PostMakerComponent
    },
    {
        path:'postPage',
        component: PostPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }