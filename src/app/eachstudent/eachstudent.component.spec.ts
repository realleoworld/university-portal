import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachstudentComponent } from './eachstudent.component';

describe('EachstudentComponent', () => {
  let component: EachstudentComponent;
  let fixture: ComponentFixture<EachstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
