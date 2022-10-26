export class persona{

    id?:number;
    nombre:string;
    apellido:string;
    ciudad:string;
    pais:string;
    urlFoto:string;

    constructor(nombre:string, apellido:string, ciudad:string, pais:string, urlFoto:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ciudad = ciudad;
        this.pais = pais;
        this.urlFoto = urlFoto;

    }


}