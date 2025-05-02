import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoilationMasterComponent } from './voilation-master.component';

describe('VoilationMasterComponent', () => {
  let component: VoilationMasterComponent;
  let fixture: ComponentFixture<VoilationMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoilationMasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoilationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
