import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusworkbasketComponent } from './statusworkbasket.component';

describe('StatusworkbasketComponent', () => {
  let component: StatusworkbasketComponent;
  let fixture: ComponentFixture<StatusworkbasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusworkbasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusworkbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
