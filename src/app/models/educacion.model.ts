export class Educacion {

    id?:number;
    nombreEducacion:string;
    institucion:string;
    personaId:number;

    //Constructor
    constructor( nombreEducacion:string, institucion:string, personaId:number ){
        this.nombreEducacion = nombreEducacion;
        this.institucion = institucion;
        this.personaId = personaId;
    }
    

}
