import { Component, OnInit } from '@angular/core';
import {Persona} from '../../../model/persona';
import {PersonaService } from '../../../service/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {

  private persona: Persona = new Persona();


  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit() {
  }


  insert(){
      this.personaService.insert(this.persona).subscribe(
           _ => {
             this.router.navigate(["/listar"]);
           }
      )
  }

}
