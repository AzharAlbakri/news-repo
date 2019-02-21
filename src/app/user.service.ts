import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { SignIn } from './sign.model';

import { Observable } from 'rxjs';
// import { SignIn } from './sign.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    readonly rootUrl = "http://localhost:5000";

  // selectedUser: User = {
  //   name: '',
  //   email: '',
  //   password: ''
  // };
  constructor(private http: HttpClient) { }
  registerUser(user: User) {
    return this.http.post(this.rootUrl + '/signUp', user);
  }

  userAuthentication(model: SignIn) {
    return this.http.post(this.rootUrl+'/signIn',model);
  }

}
