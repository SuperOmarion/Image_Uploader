import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInprogressCardComponent } from './upload-inprogress-card.component';

describe('UploadInprogressCardComponent', () => {
  let component: UploadInprogressCardComponent;
  let fixture: ComponentFixture<UploadInprogressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadInprogressCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadInprogressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
