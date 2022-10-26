import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto.model';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proyectos: Proyecto[];
  isLogged: boolean = false;

  constructor(private route: Router, private sProyecto: SProyectoService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  cargarProyectos(): void {
    this.sProyecto.list().subscribe(data => {
      this.proyectos = data;
    })
  }

  deleteProyecto(id: number): void {
    this.sProyecto.delete(id).subscribe(data => {
      this.cargarProyectos();
      alert("El proyecto fue eliminado correctamente.");
    }, err => {
      alert("Hubo un error. No se pudo eliminar el proyecto");
      this.route.navigate([""]);
    })
  }

  irproyecto(urlProyecto: string): void {
    console.log("hago  clicks")
    location.href = 'https://' + urlProyecto;
  }

}
