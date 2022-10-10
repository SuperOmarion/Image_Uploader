import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ImageState } from '../interfaces/image-state';

const apisUrls = {
  uploadImageUrl: 'imageuploader/upload'
};

@Injectable({
  providedIn: 'root'
})
export class ImageUploaderService {
  public imageUploadState = new Subject<ImageState>();
  
  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
  }

  uploadImageToServer(image: File): Observable<any>{
    var formData = new FormData();
    formData.append('image', image);
    return this.http.post(this.baseUrl + apisUrls.uploadImageUrl, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
