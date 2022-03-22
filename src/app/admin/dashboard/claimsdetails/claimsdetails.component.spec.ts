import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsdetailsComponent } from './claimsdetails.component';

describe('ClaimsdetailsComponent', () => {
  let component: ClaimsdetailsComponent;
  let fixture: ComponentFixture<ClaimsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
