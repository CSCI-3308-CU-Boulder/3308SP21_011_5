import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';     // Add your component here
import { RegisterComponent } from './components/register/register.component';  // Add your component here
import {LoginComponent} from './components/login/login.component'
import {LoggedInComponent} from './components/logged-in/logged-in.component'

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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }