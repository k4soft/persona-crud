import { Component, OnInit } from '@angular/core';
import {Persona} from '../../../model/persona';
import {PersonaService } from '../../../service/persona.service';
import { Router } from '@angular/router';
import { TipoDocumento } from '../../../model/tipodocumento';
import { TipoDocumentoService } from '../../../service/tipo-documento.service';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {

   public persona: Persona = new Persona();
   public tipoDocumentos: TipoDocumento[];


  constructor(private personaService: PersonaService, private tipoDocumentoService: TipoDocumentoService, private router: Router) { }

  ngOnInit() {
    this.tipoDocumentoService.listarDocumentos().subscribe(
      (tipoDocumentos) => {
        this.tipoDocumentos = tipoDocumentos;
      }
    );
  }


  insert(){
      this.personaService.insert(this.persona).subscribe(
           _ => {
             this.router.navigate(["/listar"]);
           }
      )
  }







}
