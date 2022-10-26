import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Educacion } from 'src/app/models/educacion.model';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  educacionEditable : Educacion = new Educacion("","", null);

  constructor( private sEducacion : SEducacionService , private route:Router , private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe( data=>{
      this.educacionEditable = data;
    }, err=>{
      alert("Hubo un error al editar la educación.");
      this.route.navigate(['']);
    })
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.sEducacion.update(id, this.educacionEditable).subscribe(data=>{
      alert("Educacion editada exitosamente.");
      this.route.navigate(['']);
    }, err=>{
      alert("Error al editar la Educacion.");
      this.route.navigate(['']);
    })

  }



}
