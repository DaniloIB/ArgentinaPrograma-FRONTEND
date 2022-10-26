import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/models/persona.model';
import { Skill } from 'src/app/models/skill.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SSkillService } from 'src/app/service/s-skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreSkill: string = '';
  porcentaje: number;
  persona: persona = new persona("", "", "", "", "");


  constructor(private sSkill: SSkillService, private router: Router, private personaSvc: PersonaService) { }

  ngOnInit(): void {
    this.personaSvc.getPersona().subscribe(data => {
      this.persona = data;
    })
  }

  onCreate() {
    const skill = new Skill(this.nombreSkill, this.porcentaje, this.persona.id);
    this.sSkill.save(skill).subscribe(data => {
      alert("Skill añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Error. No se pudo agregar la Skill.");
      this.router.navigate(['']);
    })

  }

}
