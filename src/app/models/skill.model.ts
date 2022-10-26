export class Skill {
    
    id?:number;
    nombreSkill:string;
    porcentaje:number; 
    personaId:number;

    constructor( nombreSkill:string, porcentaje:number, personaId:number ){
        this.nombreSkill = nombreSkill;
        this.porcentaje = porcentaje;
        this.personaId = personaId;
    }
}
