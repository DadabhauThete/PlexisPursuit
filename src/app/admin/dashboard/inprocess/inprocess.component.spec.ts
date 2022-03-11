import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprocessComponent } from './inprocess.component';

describe('InprocessComponent', () => {
  let component: InprocessComponent;
  let fixture: ComponentFixture<InprocessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InprocessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
