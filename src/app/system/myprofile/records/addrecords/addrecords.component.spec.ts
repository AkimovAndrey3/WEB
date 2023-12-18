import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecordsComponent } from './addrecords.component';

describe('AddrecordsComponent', () => {
  let component: AddrecordsComponent;
  let fixture: ComponentFixture<AddrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddrecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
