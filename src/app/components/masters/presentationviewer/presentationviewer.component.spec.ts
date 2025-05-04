import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationviewerComponent } from './presentationviewer.component';

describe('PresentationviewerComponent', () => {
  let component: PresentationviewerComponent;
  let fixture: ComponentFixture<PresentationviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationviewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
