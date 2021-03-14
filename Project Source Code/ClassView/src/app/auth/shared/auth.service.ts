import { Injectable } from '@angular/core';
import { RegisterModel } from 'src/app/models/RegisterModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {LoginRequestModel} from 'src/app/models/LoginRequestModel'
import { map } from 'rxjs/operators';
import {LoginResponseModel} from 'src/app/models/LoginResponseModel'
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }

  signup(registerModel: RegisterModel): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/auth/signup', registerModel);
  }

  login(loginRequestModel: LoginRequestModel): Observable<boolean> {
    return this.httpClient.post<LoginResponseModel>('http://localhost:8080/api/auth/login', loginRequestModel)
      .pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);
        return true;
      }));
  }
}
