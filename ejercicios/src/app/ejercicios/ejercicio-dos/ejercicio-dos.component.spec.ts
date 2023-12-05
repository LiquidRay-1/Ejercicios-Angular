import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioDosComponent } from './ejercicio-dos.component';

describe('EjercicioDosComponent', () => {
  let component: EjercicioDosComponent;
  let fixture: ComponentFixture<EjercicioDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjercicioDosComponent]
    });
    fixture = TestBed.createComponent(EjercicioDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
