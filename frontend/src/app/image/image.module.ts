import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageRoutingModule } from './image-routing.module';
import { ImageComponent } from './image.component';

import { FancyImageUploaderModule } from 'ng2-fancy-image-uploader';


@NgModule({
  imports: [
    CommonModule,
    ImageRoutingModule,
    FancyImageUploaderModule
  ],
  declarations: [ImageComponent]
})
export class ImageModule { }
