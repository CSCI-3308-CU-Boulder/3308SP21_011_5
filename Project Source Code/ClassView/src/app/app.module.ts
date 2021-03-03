import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

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
<<<<<<< HEAD
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./services/auth/auth.service";
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

var config = {
  apiKey: "AIzaSyCtRSE6cjr25-U24CKSjalMzqgf2z6wSIA",
  authDomain: "angular-classview.firebaseapp.com",
  projectId: "angular-classview",
  storageBucket: "angular-classview.appspot.com",
  messagingSenderId: "320893793125",
  appId: "1:320893793125:web:e2ed58d0c0d6961bff278c",
  measurementId: "G-PJ0E5F05BM"
};
||||||| f8811e9
=======
import { CreateNewPostComponent } from './components/create-new-post/create-new-post.component';
>>>>>>> c87c792570a6d1198a6c98bb7bfdd4d7b90ade79

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
<<<<<<< HEAD
    VerifyEmailComponent,
||||||| f8811e9
=======
    CreateNewPostComponent,
>>>>>>> c87c792570a6d1198a6c98bb7bfdd4d7b90ade79
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
