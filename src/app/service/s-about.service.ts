import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class SAboutService {

  eduURL = "https://portfolio-backend-daniloib.koyeb.app/about/";
  //eduURL = "http://localhost:8080/about/";

  constructor( private httpClient:HttpClient  ) {}

  

  //Traer por id
  public detail( id:number ): Observable<About>{
    return this.httpClient.get<About>( this.eduURL + `detail/${id}`);
  }

  //Guardar About
  public save( about:About ): Observable<any>{
    return this.httpClient.post<any>( this.eduURL + 'create', about);
  }

  //Editar About por ID
  public update( id:number, about:About ): Observable<any>{
    return this.httpClient.put<any>( this.eduURL + `update/${id}`, about);

  }

  //Eliminar About por ID
  public delete ( id:number ): Observable<any>{
    return this.httpClient.delete<any>( this.eduURL + `delete/${id}`);
  }
}
