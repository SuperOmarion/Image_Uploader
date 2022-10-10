import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImageState } from 'src/app/interfaces/image-state';
import { ImageUploaderService } from 'src/app/services/image-uploader.service';

const imageFolder = 'assets/images/';

@Component({
  selector: 'app-upload-home',
  templateUrl: './upload-home.component.html',
  styleUrls: ['./upload-home.component.css']
})
export class UploadHomeComponent implements OnInit {
  public cardDisplayState: number = 0;
  public fileImage: any;
  public success: boolean = false;
  public imageUrl: any = '';
  public imagePercentDone: number = 0;
  constructor(public imageUploadService: ImageUploaderService) { 
  }

  ngOnInit(): void {

  }

  readEvent(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.fileImage = reader.result?.toString();
      reader.readAsDataURL(file);
      this.cardDisplayState = 1;
      this.sendFileToServer(file);
    }
  }

  sendFileToServer(file: File) {
    this.imageUploadService.uploadImageToServer(file).subscribe(
      (data: any) => {
        if (data.type === HttpEventType.UploadProgress) {
          this.imagePercentDone = Math.round(100 * data.loaded / data.total);
        }
        if (data.status == 200 && this.imagePercentDone == 100) {
          this.cardDisplayState = 2;
          this.imageUrl = this.imageUploadService.baseUrl + imageFolder + file.name;
          this.success = true
        }

      },
      (error: any) => {
        this.cardDisplayState = 2;
        this.imageUrl = '';
        this.success = false;
      });
  }

}
