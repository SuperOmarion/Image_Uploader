import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageState } from 'src/app/interfaces/image-state';
import { ImageUploaderService } from '../../services/image-uploader.service';

@Component({
  selector: 'upload-card',
  templateUrl: './upload-card.component.html',
  styleUrls: ['./upload-card.component.css']
})
export class UploadCardComponent implements OnInit {
  @Input('fileImage') fileImage : string = '';
  @Output() readEvent: EventEmitter<any> = new EventEmitter();

  constructor(public imageUploadService: ImageUploaderService) { }

  ngOnInit(): void {
  }

  readURL(event: any): void {
    this.readEvent.emit(event);
  }

}

