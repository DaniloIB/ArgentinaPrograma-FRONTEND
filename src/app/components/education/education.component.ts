import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion.model';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educacion: Educacion[] = [];
  isLogged : boolean = true;


  constructor( private sEducacion:SEducacionService, private tokenService:TokenService ) { }

  ngOnInit(): void {  
    this.cargarEducacion();
    if( this.tokenService.getToken()){
      this.isLogged = true;
    }else{
        this.isLogged = false;
      }
  }

  cargarEducacion():void{
    this.sEducacion.list().subscribe(data => {
      this.educacion = data;
    })
  }

  deleteEducacion( id:number ){
      if( id != undefined ){
        this.sEducacion.delete(id).subscribe(data=>{
          this.cargarEducacion();
          alert("Educacion eliminada correctamente.");
        }, err=>{
          alert("No se pudo eliminar la Educacion.");
        })
      }

  }







}
