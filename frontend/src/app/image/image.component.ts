import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  options: FancyImageUploaderOptions = {
    thumbnailHeight: 200,
    thumbnailWidth: 200,
    uploadUrl: 'http://localhost:8080/upload',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
  };

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("User Images");
  }

  onUpload(file: UploadedFile) {
    console.log(file.response);
  }
}
