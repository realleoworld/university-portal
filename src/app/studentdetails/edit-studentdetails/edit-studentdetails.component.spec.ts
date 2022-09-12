import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentdetailsComponent } from './edit-studentdetails.component';

describe('EditStudentdetailsComponent', () => {
  let component: EditStudentdetailsComponent;
  let fixture: ComponentFixture<EditStudentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudentdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
