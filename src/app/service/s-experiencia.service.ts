import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = "https://portfolio-backend-daniloib.koyeb.app/experiencia/"
  //expURL = "http://localhost:8080/experiencia/";

  constructor( private httpClient: HttpClient ) { }

  public lista():Observable<Experiencia[]>{

    return this.httpClient.get<Experiencia[]>( this.expURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  public save(experiencia:Experiencia) : Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id:number, experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.expURL + `delete/${id}`);
  }
}
