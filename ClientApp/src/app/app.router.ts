import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UploadHomeComponent } from './components/upload-home/upload-home.component';

const routes : Routes = [{ path: '', component: UploadHomeComponent, pathMatch: 'full' }];
@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ] 
})
export class AppRouter { }