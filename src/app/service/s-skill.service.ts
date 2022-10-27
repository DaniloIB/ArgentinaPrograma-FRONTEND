import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SSkillService {
  skillURL= "https://arg-programa-backend.herokuapp.com/skill/";

  constructor(private http: HttpClient) { }

  //Lista
  public list(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.skillURL + "lista");
  }

  //Traer detalle de un Skill
  public detail(id: number): Observable<Skill> {
    return this.http.get<Skill>(this.skillURL + `detail/${id}`);
  }

  //Crear - Guardar
  public save(skill: Skill): Observable<any> {
    return this.http.post<any>(this.skillURL + "create", skill);
  }

  //Delete Skill
  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.skillURL + `delete/${id}`);
  }

  //Editar Skill
  public update(id: number, skill: Skill): Observable<any> {
    return this.http.put<any>(this.skillURL + `update/${id}`, skill);

  }


}
