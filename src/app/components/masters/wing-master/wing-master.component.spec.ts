import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WingMasterComponent } from './wing-master.component';

describe('WingMasterComponent', () => {
  let component: WingMasterComponent;
  let fixture: ComponentFixture<WingMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WingMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WingMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
