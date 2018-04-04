import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Register } from './register';

import { AlertService } from '../_services/index';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Login('system', 'password');
  regModel = new Register('','','');

  submitted = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private titleService: Title,
    private modalService: NgbModal,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.titleService.setTitle("Login");
  }

  loginSubmit(logForm: NgForm) {
    console.log(logForm.value);
    this.http.put("http://localhost.com:8080/login", {}).subscribe(results => {});
    this.router.navigateByUrl('/home');
    this.alertService.success("Welcome " + logForm.value.name);
  }


  open(content) {this.modalService.open(content); }
  newTask() {this.model = new Register('','',''); }

  regSubmit(regForm: NgForm) {
    console.log(regForm.value);
    this.alertService.success("User account " + regForm.value.username + " created successfully");
    this.http.put("http://localhost.com:8080/login", {}).subscribe(results => {});
  }
  /*Register() {
    this.router.navigateByUrl('/register');
  }*/

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
