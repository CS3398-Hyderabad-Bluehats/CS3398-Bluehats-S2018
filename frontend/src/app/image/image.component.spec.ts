import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

import { ImageComponent } from './image.component';
import { FancyImageUploaderModule } from 'ng2-fancy-image-uploader';
import { FormsModule } from '@angular/forms';

describe('ImageComponent', () => {
  let titleService: Title;

  // Components to test
  let component: ImageComponent;

  // Component fixtures
  let fixture: ComponentFixture<ImageComponent>;

  // Elements

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FancyImageUploaderModule
      ],
      declarations: [ImageComponent],
      providers: [{ provide: Title, useClass: Title }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComponent);

    // Access the dependency injected component instance
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Component Elements
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title', () => {
    titleService = TestBed.get(Title);
    expect(titleService.getTitle()).toBe(component.title);
  });

  it('should instantiate component', () => {
    expect(component instanceof ImageComponent).toBe(true, 'should create ImageComponent');
  });
});
