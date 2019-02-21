import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  name:string = localStorage.getItem('name')
  email:string = localStorage.getItem('email')
  constructor() { }

  ngOnInit() {
    
  }

}
