import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';
import { SSkillService } from 'src/app/service/s-skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  isLogged = false;


  constructor(private sSkill: SSkillService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.sSkill.list().subscribe(
      data => {
        this.skills = data;
      }
    )
  }

  deleteSkill(id?: number) {
    if (id != undefined) {
      this.sSkill.delete(id).subscribe(
        data => {
          alert("Skill borrado correctamente.");
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar el Skill.");
        }
      )
    }

  }

}
