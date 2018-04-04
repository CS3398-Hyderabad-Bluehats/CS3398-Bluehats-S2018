import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  exports: [SidebarComponent],
  declarations: [SidebarComponent]
})
export class SidebarModule { }
