export class Experiencia {

    id?:number;
    empresa:string;
    puesto:string;
    descripcion:string;
    personaId:number;

    constructor( empresa:string , puesto:string, descripcion:string, personaId:number ){
        this.empresa = empresa;
        this.puesto = puesto;
        this.descripcion = descripcion;
        this.personaId = personaId;
    }
}
