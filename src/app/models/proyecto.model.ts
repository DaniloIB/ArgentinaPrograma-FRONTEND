export class Proyecto {
    id : number;
    nombreProyecto : string;
    descripcion : string;
    urlProyecto:string;
    urlImg:string;
    personaId:number;

    constructor( nombreProyecto:string, descripcion:string, urlProyecto:string, urlImg:string, personaId:number ){
        this.nombreProyecto = nombreProyecto;
        this.descripcion = descripcion;
        this.urlProyecto = urlProyecto;
        this.urlImg = urlImg;
        this.personaId = personaId;

    }

}
