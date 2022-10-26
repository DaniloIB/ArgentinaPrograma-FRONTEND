import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion.model';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  nombreEducacion: string = '';
  institucion: string = '';
  persona: persona = new persona("", "", "", "", "");


  constructor(private sEducacion: SEducacionService, private route: Router, private personaSvc: PersonaService) { }

  ngOnInit(): void {
    this.personaSvc.getPersona().subscribe(data => {
      this.persona = data;
    })
  }

  onCreate() {
    const nuevaEdu = new Educacion(this.nombreEducacion, this.institucion, this.persona.id);
    this.sEducacion.save(nuevaEdu).subscribe(data => {
      alert("Educacion creada exitosamente.");
      this.route.navigate(['']);
    }, err => {
      alert("Hubo un error. No se pudo crear la Educacion.");
      this.route.navigate(['']);
    })
  }

}
