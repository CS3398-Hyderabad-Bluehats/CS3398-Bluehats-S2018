import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AlertComponent } from './_directives';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService } from './_services';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from "@angular/common";


import { defaultRoutes } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { LoginModule } from './login/login.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        AlertComponent,
        SidebarComponent
      ],
      providers: [
        AlertService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should instantiate component', () => {
    expect(component instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});

describe('Router: AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HomeModule,
        UserModule,
        LoginModule,
        RouterTestingModule.withRoutes(defaultRoutes)
      ],
      declarations: [
        AppComponent,
        AlertComponent,
        SidebarComponent
      ],
      providers: [
        AlertService
      ]
    })
    .compileComponents()
    .then(() => {
      router = TestBed.get(Router);
      location = TestBed.get(Location);
  
      fixture = TestBed.createComponent(AppComponent);
      router.initialNavigation();
    });
  }));

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10)
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['']).then(() => {
      tick();
      expect(location.path()).toBe('/home');
    });
  }));

  it('navigate to "/home" redirects you to /home', fakeAsync(() => {
    router.navigate(['/home']).then(() => {
      tick();
      expect(location.path()).toBe('/home');
    });
  }));
  
  it('navigate to "/login" redirects you to /login', fakeAsync(() => {
    router.navigate(['/login']).then(() => {
      tick();
      expect(location.path()).toBe('/login');
    });
  }));

  it('navigate to "/user" redirects you to /user', fakeAsync(() => {
    router.navigate(['/user']).then(() => {
      tick();
      expect(location.path()).toBe('/user');
    });
  }));
});
