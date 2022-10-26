import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia.model';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  persona: persona = new persona("", "", "", "", "");
  experiencia: Experiencia[] = [];
  experienciaFilter: Experiencia[] = [];
  isLogged = false;

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService, private personaSvc: PersonaService) { }


  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(
      data => { this.experiencia = data }
    )
  }

  deleteExp(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia.");
        }
      )
    }

  }

}
