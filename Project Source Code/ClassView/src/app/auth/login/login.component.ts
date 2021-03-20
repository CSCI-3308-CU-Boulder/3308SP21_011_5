import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {LoginRequestModel} from 'src/app/models/LoginRequestModel'
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequest: LoginRequestModel;
  registerSuccessMessage: string;
  isError: boolean;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
    private router: Router, private toastr: ToastrService) {
    this.loginRequest = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });

    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params.registered !== undefined && params.registered === 'true') {
          this.toastr.success('Signup Successful. Please check your inbox for an activation Email.');
        }
      });
  }

  login() {
    this.loginRequest.username = this.loginForm.get('username').value;
    this.loginRequest.password = this.loginForm.get('password').value;

    this.authService.login(this.loginRequest).subscribe(data => {
      if (data) {
        this.isError = false;
        this.router.navigateByUrl('/');
        this.toastr.success('Login Successful');
      } else {
        this.isError = true;
      }
    });
  }

}