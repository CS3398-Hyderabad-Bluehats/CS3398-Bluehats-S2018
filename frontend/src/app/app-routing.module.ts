import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const defaultRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(defaultRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
