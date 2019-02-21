import { Component, OnInit } from '@angular/core';
import { User } from '../../../user.model';
import { UserService } from '../../../user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registration:User;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
    this.registration={
      name:'',
      email:'',
      password:'',
    }
    
  }

  onFormSubmit(registration){
    console.log(registration,'reg')
    console.log("registration",this.userService.registerUser(registration));
    this.userService.registerUser(registration).subscribe((data:any )=>{
   
        console.log("datatataatat",data);
        console.log(data,"result")
        localStorage.setItem("name",data.name)
        localStorage.setItem("email",data.email)
        localStorage.setItem("token",data.token)
        this.router.navigate(['news'])

        // if(data.result.succeeded){
        //   console.log("nda,snd,masnd,amdn,");
        //  this.ngOnInit();
        // }
    }), error => console.log(error,"   errrrrrrrrrror");
}

}
