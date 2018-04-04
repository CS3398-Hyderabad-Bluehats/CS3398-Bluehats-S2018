import { Component, OnInit } from '@angular/core';
import { userModel, imageModel } from './sidebarModel';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private isUser = false;
  private user = new userModel("User1", []);
  
  constructor() {}

  ngOnInit() {
  }

  newModel() {
    let imageModels = [
      new imageModel("Picture 1", "Picture 1.jpeg", "Picture 1 information"),
      new imageModel("Picture 2", "Picture 2.jpeg", "Picture 2 information"),
      new imageModel("Picture 3", "Picture 3.jpeg", "Picture 3 information")
    ]
    this.user = new userModel("User1", imageModels);
  }

  setUser() {this.isUser = !this.isUser;}

}
