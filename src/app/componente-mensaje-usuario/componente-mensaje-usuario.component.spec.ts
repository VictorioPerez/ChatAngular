import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMensajeUsuarioComponent } from './componente-mensaje-usuario.component';

describe('ComponenteMensajeUsuarioComponent', () => {
  let component: ComponenteMensajeUsuarioComponent;
  let fixture: ComponentFixture<ComponenteMensajeUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteMensajeUsuarioComponent]
    });
    fixture = TestBed.createComponent(ComponenteMensajeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
