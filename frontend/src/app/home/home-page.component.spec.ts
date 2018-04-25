import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let titleService: Title;

  // Components to test
  let component: HomePageComponent;

  // Component fixture
  let fixture: ComponentFixture<HomePageComponent>;

  // Elements

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [{ provide: Title, useClass: Title }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);

    // Access the dependency injected component instance
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();

    // Elements
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title', () => {
    titleService = TestBed.get(Title);
    expect(titleService.getTitle()).toBe(component.title);
  });

  it('should instantiate component', () => {
    expect(component instanceof HomePageComponent).toBe(true, 'should create HomePageComponent');
  });
});
