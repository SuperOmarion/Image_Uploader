import { Component, OnInit } from '@angular/core';
import { ImageState } from 'src/app/interfaces/image-state';
import { ImageUploaderService } from 'src/app/services/image-uploader.service';

@Component({
  selector: 'upload-inprogress-card',
  templateUrl: './upload-inprogress-card.component.html',
  styleUrls: ['./upload-inprogress-card.component.css']
})
export class UploadInprogressCardComponent implements OnInit {

  constructor(public imageUploadService: ImageUploaderService) { 
  }

  ngOnInit(): void {
    
  }

}
