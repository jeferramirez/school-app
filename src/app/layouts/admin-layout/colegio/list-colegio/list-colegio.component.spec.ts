import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListColegioComponent } from './list-colegio.component';

describe('ListColegioComponent', () => {
  let component: ListColegioComponent;
  let fixture: ComponentFixture<ListColegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListColegioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
