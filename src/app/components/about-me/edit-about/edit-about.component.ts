import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/models/about.model';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SAboutService } from 'src/app/service/s-about.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  about: About = new About("", "");
  persona: persona = new persona("", "", "", "", "");

  constructor(private sAbout: SAboutService, private sPersona: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAbout.detail(id).subscribe(
      data => {
        this.about = data;
      }, err => {
        alert("Error al cargar el About.");
        this.router.navigate(['']);
      }
    )

    this.sPersona.getPersona().subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al cargar Persona.");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sAbout.update(id, this.about).subscribe(data => {
      alert("Perfil editado correctamente");
    }, err => {
      alert('Error al editar el Perfil.')
      this.router.navigate(['']);
    }
    )

    this.sPersona.update(1, this.persona).subscribe(data => {
      alert("Perfil editado correctamente");
      this.router.navigate(['']);
    }, err => {
      alert('Error al editar el Perfil.')
      this.router.navigate(['']);
    }
    )


  }

}
