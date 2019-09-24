import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPersonaComponent } from './registro-persona.component';

describe('RegistroPersonaComponent', () => {
  let component: RegistroPersonaComponent;
  let fixture: ComponentFixture<RegistroPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
