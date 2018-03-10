import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';

import { AlertService } from '../_services/index';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Login('system', 'password');

  submitted = false;

  constructor(
    private router: Router,
    private alertService: AlertService
  ) {

  }
  onSubmit() {
    console.log("submitting");
    this.submitted = true;
  }

  login() {
    console.log("submitting");
    this.submitted = true;
    // this.alertService.success("You logged in successfully!");
    this.router.navigateByUrl('/home');
    //call to backend 
  }

  Register() {
    this.router.navigateByUrl('/register');
  }

  ngOnInit() {
  }

  // These functions make alerts to the web page
  // you can use them by calling this.success("My alert message").
  success(message: string) {
    this.alertService.success(message);
  }

  error(message: string) {
    this.alertService.error(message);
  }

  info(message: string) {
    this.alertService.info(message);
  }

  warn(message: string) {
    this.alertService.warn(message);
  }

  clear() {
    this.alertService.clear();
  }

}
