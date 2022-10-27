import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class SProyectoService {
  proyectoURL= "https://arg-programa-backend.herokuapp.com/proyecto/";

  constructor( private httpClient:HttpClient ) { }

  //Traer lista de proyectos
  public list():Observable<Proyecto[]>{
      return this.httpClient.get<Proyecto[]>( this.proyectoURL + "lista");
  }

  //Traer detalle de un Proyecto
  public detail( id:number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>( this.proyectoURL + `detail/${id}`);
  }

  //Crear - Guardar
  public save( proyecto : Proyecto ):Observable<any>{
    return this.httpClient.post<any>(this.proyectoURL + "create", proyecto );
  }

  //Delete Proyecto
  public delete( id:number):Observable<any>{
    return this.httpClient.delete<any>(this.proyectoURL + `delete/${id}`);
  }

  //Editar Proyecto
  public update( id:number, proyecto:Proyecto ):Observable<any>{
    return this.httpClient.put<any>( this.proyectoURL + `update/${id}`, proyecto );

  }

}
