import { Component, OnInit } from '@angular/core';
import {PersonaService} from '../../../service/persona.service';
import {Persona} from '../../../model/persona'



@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})
export class ListaPersonaComponent implements OnInit {

  personas: Persona[] = [];
  personaSeleccionada:Persona;

  constructor(private personaService: PersonaService) { }

  ngOnInit() {

    this.personaService.listarPersona().subscribe(
        (personas) => {
          this.personas = personas;
        }
      );

  }

  showModal(persona:Persona){
    this.personaSeleccionada = persona;
  }

  eliminar(id:number){
    this.personaService.eliminar(id).subscribe(
      _=>{
        this.personas = this.personas.filter(persona => persona != this.personaSeleccionada);
      }
    )
  }

}
