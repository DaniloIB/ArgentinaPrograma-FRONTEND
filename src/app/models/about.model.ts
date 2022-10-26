export class About {

    id?:number;
    titular:string;
    descripcion:string;

    //Constructor
    constructor( titular:string, descripcion:string ){
        this.titular = titular;
        this.descripcion = descripcion;
    }

}
