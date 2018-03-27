import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import application modules with content
import { HomeModule } from './home/home.module';
import { LoginModule } from "./login/login.module";
import { ImageModule } from './image/image.module';
import { AppRoutingModule } from './app-routing.module'

// Import alert service and component
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
    ImageModule,
    AppRoutingModule
  ],
  providers: [
    // include alert service in app module providers
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
