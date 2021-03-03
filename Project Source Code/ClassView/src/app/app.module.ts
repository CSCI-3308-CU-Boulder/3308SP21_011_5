import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DemoMaterialModule } from './material-module';
import { RegisterComponent } from './components/register/register.component'
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AlertComponent } from './components/alert/alert.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggedInNavbarComponent } from './components/logged-in-navbar/logged-in-navbar.component';
import { CreateNewPostComponent } from './components/create-new-post/create-new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    LoggedInComponent,
    ProfileComponent,
    AlertComponent,
    LoggedInNavbarComponent,
    CreateNewPostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
