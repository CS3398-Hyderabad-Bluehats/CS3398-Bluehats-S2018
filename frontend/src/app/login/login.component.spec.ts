import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent, LoginComponentWrapper } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginRoutingModule } from './login-routing.module';
import { AlertComponent } from '../_directives';
import { AlertService } from '../_services';
import { NgbModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement, Injectable } from '@angular/core';
import { By, Title } from '@angular/platform-browser';


describe('LoginComponent', () => {
  let titleService: Title;

  // Components to test
  let wrapperComponent: LoginComponentWrapper;
  let component: LoginComponent;

  // Component fixtures:
  let wrapperFixture: ComponentFixture<LoginComponentWrapper>;
  let componentFixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule,
        LoginRoutingModule,
        NgbModule.forRoot()
      ],
      declarations: [
        AlertComponent,
        LoginComponent,
        LoginComponentWrapper
      ],
      providers: [
        AlertService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    wrapperFixture = TestBed.createComponent(LoginComponentWrapper);
    componentFixture = TestBed.createComponent(LoginComponent);
    
    wrapperComponent = wrapperFixture.componentInstance;
    component = componentFixture.componentInstance;

    componentFixture.detectChanges();
    wrapperFixture.detectChanges();

    jasmine.addMatchers({
      toHaveModal: function (util, customEqualityTests) {
        return {
          compare: function (actual, content?, selector?) {
            console.log("toHaveModal");
            console.log(util);
            console.log(customEqualityTests);
            console.log(actual);
            console.log(content);
            console.log(selector);
            const allModalsContent = document.querySelector(selector || 'body').querySelectorAll('.modal-content'); let pass = true;
            console.log(allModalsContent);
            let errMsg;

            if (!content) {
              pass = allModalsContent.length > 0;
              errMsg = 'at least one modal open but found none';
            } else if (Array.isArray(content)) {
              pass = allModalsContent.length === content.length;
              errMsg = `${content.length} modals open but found ${allModalsContent.length}`;
            } else {
              pass = allModalsContent.length === 1 && allModalsContent[0].textContent.trim() === content;
              errMsg = `exactly one modal open but found ${allModalsContent.length}`;
            }

            return { pass: pass, message: `Expected ${actual.outerHTML} to have ${errMsg}` };
          },
        };
      }
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title', () => {
    titleService = TestBed.get(Title);
    expect(titleService.getTitle()).toBe(component.title);
  });

  it('should instantiate component', () => {
    expect(component instanceof LoginComponent).toBe(true, 'should create LoginComponent');
  });

  it('disabling login should disable the login button.', () => {
    let loginSubmit = componentFixture.debugElement.query(By.css('#loginCSS'));
    component.loginEnabled = false;
    componentFixture.detectChanges();
    expect(loginSubmit.nativeElement.disabled).toBeTruthy();
  });

  // Registration tests
  // it('should open and close modal with default options', () => {
  //   component = wrapperComponent.myComponent;
  //   component.ngOnInit();
  //   component.openModal('content');
  //   componentFixture.detectChanges();
  //   console.log("message");
  //   // expect(fixture.nativeElement).toHaveModal('test');
  //   // expect(document.querySelector(".modal-body")).toBeTruthy();
  //   component.closeModal();
  //   componentFixture.detectChanges();
  //   // expect(fixture.nativeElement).not.toHaveModal();
  // });


  // it('Setting submitted to false disables the register submit button.', () => {
  //   component.openModal('content');
  //   component.registerEnabled = false;
  //   fixture.detectChanges();
  //   console.log("message");
  //   // expect(fixture.nativeElement).toHaveModal('test');
  //   // expect(document.querySelector(".modal-body")).toBeTruthy();
  //   component.closeModal();
  //   fixture.detectChanges();
  //   // expect(fixture.nativeElement).not.toHaveModal();
  // });
});
