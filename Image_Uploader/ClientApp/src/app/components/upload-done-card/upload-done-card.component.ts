import { Component, Input, OnInit } from '@angular/core';
import { ImageState } from 'src/app/interfaces/image-state';
import { ImageUploaderService } from 'src/app/services/image-uploader.service';

@Component({
  selector: 'upload-done-card',
  templateUrl: './upload-done-card.component.html',
  styleUrls: ['./upload-done-card.component.css']
})
export class UploadDoneCardComponent implements OnInit {
  @Input('imageUrl') imageUrl: string = '';
  @Input('success') success: boolean = false;

  constructor(public imageUploadService: ImageUploaderService) { }

  ngOnInit(): void {
  }
}
