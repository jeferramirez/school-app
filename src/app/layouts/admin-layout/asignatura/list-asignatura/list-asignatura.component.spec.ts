import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsignaturaComponent } from './list-asignatura.component';

describe('ListAsignaturaComponent', () => {
  let component: ListAsignaturaComponent;
  let fixture: ComponentFixture<ListAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
