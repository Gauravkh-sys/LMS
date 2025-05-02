import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandentryComponent } from './landentry.component';

describe('LandentryComponent', () => {
  let component: LandentryComponent;
  let fixture: ComponentFixture<LandentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandentryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
