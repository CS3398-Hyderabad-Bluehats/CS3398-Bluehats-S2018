import { BrowserModule, Title  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Import application modules with content
import { HomeModule } from './home/home.module';
import { LoginModule } from "./login/login.module";
import { ImageModule } from './image/image.module';
import { UserModule } from './user/user.module';

// Import alert service and component
import { AlertComponent } from './_directives/index';
import { AlertService } from './_services/index';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { SidebarModule } from './sidebar/sidebar.module';


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
    UserModule,
    AngularFontAwesomeModule,
    SidebarModule,
    AppRoutingModule,
  ],
  providers: [
    // include alert service in app module providers
    AlertService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
