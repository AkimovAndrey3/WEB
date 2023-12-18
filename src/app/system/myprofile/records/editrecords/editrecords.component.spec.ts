import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrecordsComponent } from './editrecords.component';

describe('EditrecordsComponent', () => {
  let component: EditrecordsComponent;
  let fixture: ComponentFixture<EditrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditrecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
