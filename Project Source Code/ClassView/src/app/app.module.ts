import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { PostPageComponent } from './components/post-page/post-page.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component'
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AlertComponent } from './components/alert/alert.component';
import { LoggedInNavbarComponent } from './components/logged-in-navbar/logged-in-navbar.component';
import { PostMakerComponent } from './components/post-maker/post-maker.component';
//import { KatexModule } from 'ng-katex';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    //KatexModule,
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RichTextEditorAllModule,
  ],
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
    PostMakerComponent,
    PostPageComponent,
  ],

  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
