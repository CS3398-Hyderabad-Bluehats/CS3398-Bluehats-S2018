import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private show = false;
  public constructor(private titleService: Title) {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  toggleCollapse() {this.show = !this.show}

}
