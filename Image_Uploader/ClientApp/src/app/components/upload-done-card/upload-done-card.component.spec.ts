import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDoneCardComponent } from './upload-done-card.component';

describe('UploadDoneCardComponent', () => {
  let component: UploadDoneCardComponent;
  let fixture: ComponentFixture<UploadDoneCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDoneCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDoneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
