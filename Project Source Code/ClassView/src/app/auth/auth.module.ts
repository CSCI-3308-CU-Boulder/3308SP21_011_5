import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material-module';
//import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    SignUpComponent,
    //LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ]
})
export class AuthModule { }