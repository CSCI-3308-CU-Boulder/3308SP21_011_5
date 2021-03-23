import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';     // Add your component here
import {LoginComponent} from './auth/login/login.component'
import {LoggedInComponent} from './components/logged-in/logged-in.component'
import {ProfileComponent} from './components/profile/profile.component'
import { PostMakerComponent } from './components/post-maker/post-maker.component';
<<<<<<< HEAD
import { SignUpComponent } from './auth/sign-up/sign-up.component';
||||||| b9d2119
=======
import { PostPageComponent } from './components/post-page/post-page.component';
>>>>>>> 5c26fb5fe084981454d0fee9e32ce3a50572948e

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