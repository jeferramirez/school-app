import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialStepperComponent } from './material-stepper.component';

describe('MaterialStepperComponent', () => {
  let component: MaterialStepperComponent;
  let fixture: ComponentFixture<MaterialStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
