import { TipoDocumento } from './tipodocumento';
export class Persona {
     id: number;
     numeroDocumento: string;
     nombre: string;
     apellido: string;
     telefono: string;
     tipoDocumento = new TipoDocumento();
}
