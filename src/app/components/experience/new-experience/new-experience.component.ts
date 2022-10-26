import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia.model';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {
  empresa: string = '';
  puesto: string = '';
  descripcion: string = '';
  persona: persona = new persona("", "", "", "", "");

  constructor(private sExperiencia: SExperienciaService, private router: Router, private personaSvc: PersonaService) { }

  ngOnInit(): void {
    this.personaSvc.getPersona().subscribe(data => {
      this.persona = data;
    })
  }

  onCreate() {
    const exp = new Experiencia(this.empresa, this.puesto, this.descripcion, this.persona.id);
    this.sExperiencia.save(exp).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Error. No se pudo agregar la experiencia.");
      this.router.navigate(['']);
    })

  }

}
