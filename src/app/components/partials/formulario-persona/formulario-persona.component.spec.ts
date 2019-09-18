import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPersonaComponent } from './formulario-persona.component';

describe('FormularioPersonaComponent', () => {
  let component: FormularioPersonaComponent;
  let fixture: ComponentFixture<FormularioPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
