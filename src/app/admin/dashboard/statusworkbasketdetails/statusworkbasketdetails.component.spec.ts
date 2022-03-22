import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusworkbasketdetailsComponent } from './statusworkbasketdetails.component';

describe('StatusworkbasketdetailsComponent', () => {
  let component: StatusworkbasketdetailsComponent;
  let fixture: ComponentFixture<StatusworkbasketdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusworkbasketdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusworkbasketdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
