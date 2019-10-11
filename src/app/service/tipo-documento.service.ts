import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDocumento } from '../model/tipodocumento';
import { Endpoints } from '../util/endpoints';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  constructor(private http: HttpClient) { }


  listarDocumentos(): Observable<TipoDocumento[]> {
    return this.http.get<TipoDocumento[]>(Endpoints.LISTAR_DOCUMENTOS);
  }


}
