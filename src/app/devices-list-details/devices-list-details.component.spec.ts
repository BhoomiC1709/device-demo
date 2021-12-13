import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesListDetailsComponent } from './devices-list-details.component';

describe('DevicesListDetailsComponent', () => {
  let component: DevicesListDetailsComponent;
  let fixture: ComponentFixture<DevicesListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
