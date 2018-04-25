import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AlertService } from '../_services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = "Home";
  
  constructor(
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
