import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  Url = 'https://portfolio-backend-daniloib.koyeb.app/personas/';
  //Url = "http://localhost:8080/personas/";

  constructor( private http : HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.Url + "traer/perfil");
  }

  public update(id:number, persona:persona):Observable<any>{
    return this.http.put<any>(this.Url + `update/${id}`, persona);
  }


}
