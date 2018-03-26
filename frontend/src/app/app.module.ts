import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { LoginModule } from "./login/login.module";
import { AppRoutingModule } from './app-routing.module'

// import alert service and component
import { AlertComponent } from './_directives/index';
import { AlertService } from './_services/index';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    // include alert directive component in app module declarations
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    // include alert service in app module providers
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
