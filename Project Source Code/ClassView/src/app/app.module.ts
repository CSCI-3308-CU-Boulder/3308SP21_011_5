import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DemoMaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AlertComponent } from './components/alert/alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { KatexModule } from 'ng-katex';
import { LoggedInNavbarComponent } from './components/logged-in-navbar/logged-in-navbar.component';
import { PostMakerComponent } from './components/post-maker/post-maker.component';
import {AuthModule} from './auth/auth.module'
import {NgxWebstorageModule} from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
import {TokenInterceptor} from './token-interceptor'


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoggedInComponent,
    ProfileComponent,
    AlertComponent,
    LoggedInNavbarComponent,
    PostMakerComponent
  ],
  imports: [
    //KatexModule,
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RichTextEditorAllModule,
    AuthModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
