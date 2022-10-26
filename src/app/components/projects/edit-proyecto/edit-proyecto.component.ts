import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto.model';
import { SProyectoService } from 'src/app/service/s-proyecto.service';


@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyectoEditable: Proyecto;

  constructor(private sProyecto: SProyectoService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(data => {
      this.proyectoEditable = data;
    }, err => {
      alert("Hubo un error al editar el proyecto.");
      this.route.navigate(['']);
    })
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyecto.update(id, this.proyectoEditable).subscribe(data => {
      alert("Proyecto editado exitosamente.");
      this.route.navigate(['']);
    }, err => {
      alert("Error al editar el proyecto.");
      this.route.navigate(['']);
    })

  }

}
