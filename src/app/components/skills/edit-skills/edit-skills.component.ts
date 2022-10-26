import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill.model';
import { SSkillService } from 'src/app/service/s-skill.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {

  skill: Skill = new Skill("", null, null);

  constructor(private sSkill: SSkillService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al editar Skill.");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.update(id, this.skill).subscribe(data => {
      alert("Skill editado correctamente");
      this.router.navigate(['']);
    }, err => {
      alert('Error al editar el Skill.')
      this.router.navigate(['']);
    }
    )
  }

}
