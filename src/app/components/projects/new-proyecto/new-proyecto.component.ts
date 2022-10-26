import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/models/persona.model';
import { Proyecto } from 'src/app/models/proyecto.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreProyecto:string;
  descripcion:string;
  urlProyecto:string;
  urlImg:string;
  persona:persona = new persona("","","","","");




  constructor( private route:Router, private sProyecto:SProyectoService, private personaSvc:PersonaService) { }

  ngOnInit(): void {
    this.personaSvc.getPersona().subscribe(data => {
      this.persona = data;
    })
  }

  onCreate():void{
    const proyecto = new Proyecto(this.nombreProyecto, this.descripcion, this.urlProyecto, this.urlImg, this.persona.id);
    this.sProyecto.save(proyecto).subscribe(data=>{
      alert("Proyecto creado correctamente.");
      this.route.navigate(['']);
    }, err=>{
      alert('Hubo un error. No se pudo crear el Proyecto');
      this.route.navigate(['']);
    })

  }


}
