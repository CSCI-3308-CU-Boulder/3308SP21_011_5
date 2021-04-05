import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {RegisterModel} from 'src/app/models/RegisterModel'
import {AuthService} from 'src/app/auth/shared/auth.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerRequest: RegisterModel;
  signupForm: FormGroup;

 constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.registerRequest = {
      username: '',
      email: '',
      password: ''
    };
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }

  signup() {
    this.registerRequest.email = this.signupForm.get('email').value;
    this.registerRequest.username = this.signupForm.get('username').value;
    this.registerRequest.password = this.signupForm.get('password').value;

    this.authService.signup(this.registerRequest)
      .subscribe(data => {
        this.router.navigate(['/login'],
          { queryParams: { registered: 'true' } });
      }, error => {
        if(error.status === 200){
          this.router.navigate(['/login'],
          { queryParams: { registered: 'true' } });
        }
        else{
          this.toastr.error('Registration Failed! Please try again');
        }
        
      });
  }
}