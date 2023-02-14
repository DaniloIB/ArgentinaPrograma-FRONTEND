import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class SEducacionService {

  eduURL = "https://portfolio-backend-daniloib.koyeb.app/educacion/";
  //eduURL = "http://localhost:8080/educacion/";

  constructor( private httpClient:HttpClient  ) {}

  //Traer lista
  public list(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>( this.eduURL + 'lista' )
  }

  //Traer por id
  public detail( id:number ): Observable<Educacion>{
    return this.httpClient.get<Educacion>( this.eduURL + `detail/${id}`);
  }

  //Guardar educacion
  public save( educacion:Educacion ): Observable<any>{
    return this.httpClient.post<any>( this.eduURL + 'create', educacion);
  }

  //Editar educacion por ID
  public update( id:number, educacion:Educacion ): Observable<any>{
    return this.httpClient.put<any>( this.eduURL + `update/${id}`, educacion);

  }

  //Eliminar educacion por ID
  public delete ( id:number ): Observable<any>{
    return this.httpClient.delete<any>( this.eduURL + `delete/${id}`);
  }
}
