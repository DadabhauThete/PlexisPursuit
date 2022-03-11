import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitclaimsComponent } from './submitclaims.component';

describe('SubmitclaimsComponent', () => {
  let component: SubmitclaimsComponent;
  let fixture: ComponentFixture<SubmitclaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitclaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
