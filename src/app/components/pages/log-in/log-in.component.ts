import { Component, OnInit } from '@angular/core';
import { SignIn } from '../../../sign.model';
import { UserService } from '../../../user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logIn: SignIn;
  constructor(private userService: UserService,private router : Router) { }

  ngOnInit() {
    this.logIn = {
      email: '',
      password: '',
    }
  }

  onlogInSubmit(logIn) {
    console.log("onFormSubmit", logIn);
    //this.userService.userAuthentication(logIn)
      this.userService.userAuthentication(logIn).subscribe((data:any )=>{

        console.log("datatataatat",data);
        localStorage.setItem("name",data.name)
        localStorage.setItem("email",data.email)
        localStorage.setItem("token",data.token)
        this.router.navigate(['news'])

    }), error => console.log(error,"   errrrrrrrrrror"); 
  }

}
