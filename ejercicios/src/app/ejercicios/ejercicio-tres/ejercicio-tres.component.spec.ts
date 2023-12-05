import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioTresComponent } from './ejercicio-tres.component';

describe('EjercicioTresComponent', () => {
  let component: EjercicioTresComponent;
  let fixture: ComponentFixture<EjercicioTresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjercicioTresComponent]
    });
    fixture = TestBed.createComponent(EjercicioTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
