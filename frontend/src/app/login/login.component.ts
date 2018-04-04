import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Register } from './register';

import { AlertService } from '../_services/index';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Login('system', 'password');
  regModel = new Register('', '', '');

  submitted = false;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private titleService: Title,
    private modalService: NgbModal,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.titleService.setTitle("Login");
  }

  loginSubmit(logForm: NgForm) {
    console.log(logForm.value);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "*");
    headers.append("Access-Control-Allow-Headers", "*");

    this.http.put("http://localhost:8080/login",
      { name: logForm.value.name, password: logForm.value.password },
      { headers: headers }
    ).subscribe(results => {
      logForm.reset();
      console.log("Results from LOGIN POST");
      console.log(results);
      if (results) {
        this.router.navigateByUrl('/home');
        this.alertService.success("Welcome " + logForm.value.name);
      } else {
        this.model = new Login('system', 'password');
        this.alertService.error("Failed to login. Try again.");
      }
    });
  }


  open(content) { this.modalService.open(content); }
  newTask() { this.model = new Register('', '', ''); }

  regSubmit(regForm: NgForm) {
    console.log(regForm.value);
    this.alertService.success("User account " + regForm.value.username + " created successfully");
    this.http
      .post(
        "http://localhost:8080/login",
        { name: regForm.value.username, password: regForm.value.password }
      ).subscribe(results => {
        console.log("Results from REG POST");
        console.log(results);
      });
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
