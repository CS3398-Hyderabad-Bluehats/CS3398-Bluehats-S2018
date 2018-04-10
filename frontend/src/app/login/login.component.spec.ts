import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginRoutingModule } from './login-routing.module';
import { AlertComponent } from '../_directives';
import { AlertService } from '../_services';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginSubmit: DebugElement;
  let registerSubmit: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        LoginRoutingModule,
        NgbModule.forRoot()
      ],
      declarations: [
        LoginComponent,
        AlertComponent
      ],
      providers: [
        AlertService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loginSubmit = fixture.debugElement.query(By.css('#loginButton'));
    registerSubmit = fixture.debugElement.query(By.css('#regButton'));
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Setting submitted to false disables the login submit button.', () => {
    component.loginEnabled = false;
    fixture.detectChanges();
    expect(loginSubmit.nativeElement.disabled).toBeTruthy();
  });

  // it('Setting submitted to false disables the register submit button.', () => {
  //   component.registerEnabled = false;
  //   fixture.detectChanges();
  //   expect(registerSubmit.nativeElement.disabled).toBeTruthy();
  // });
});
