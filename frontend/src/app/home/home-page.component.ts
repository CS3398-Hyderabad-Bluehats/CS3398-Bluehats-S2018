import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AlertService } from '../_services/index';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Home");
  }
}
