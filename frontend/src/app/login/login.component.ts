import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Login('system','password');

  submitted = false;

  constructor(private router: Router) {

  }
  onSubmit() {
    console.log("submitting");
    this.submitted = true;
  }

  login() {
    console.log("submitting");
    this.submitted = true;
    this.router.navigateByUrl('/home');
    //call to backend 
  }

  ngOnInit() {
  }

}
