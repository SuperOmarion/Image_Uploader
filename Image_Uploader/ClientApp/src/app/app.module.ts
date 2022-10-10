import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppComponent } from './app.component';
import { UploadCardComponent } from './components/upload-card/upload-card.component';
import { UploadInprogressCardComponent } from './components/upload-inprogress-card/upload-inprogress-card.component';
import { UploadDoneCardComponent } from './components/upload-done-card/upload-done-card.component';
import { UploadHomeComponent } from './components/upload-home/upload-home.component';
import { AppRouter } from './app.router';
import { ImageUploaderService } from './services/image-uploader.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadCardComponent,
    UploadInprogressCardComponent,
    UploadDoneCardComponent,
    UploadHomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRouter,
    ClipboardModule
  ],
  providers: [ImageUploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
