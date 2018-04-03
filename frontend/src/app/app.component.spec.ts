import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AlertComponent } from './_directives';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService } from './_services';
import { Title } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        AlertComponent,
        SidebarComponent
      ],
      providers: [
        AlertService,
        Title
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
