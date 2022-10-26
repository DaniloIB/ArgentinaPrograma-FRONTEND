import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about-me/edit-about/edit-about.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { EducationComponent } from './components/education/education.component';
import { NewEducationComponent } from './components/education/new-education/new-education.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia/edit-experiencia.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { NewExperienceComponent } from './components/experience/new-experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/projects/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/projects/new-proyecto/new-proyecto.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { NewSkillComponent } from './components/skills/new-skills/new-skill.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path:"home", component: HomeComponent,
      children:[
        {path:"", component: DashboardHomeComponent},
        {path:"educacion", component: EducationComponent},
        {path:"experiencia", component: ExperienceComponent},
        {path:"skills", component: SkillsComponent},
        {path:"project", component: ProjectsComponent},
      ]
    },
  {path:"login", component: LoginComponent},
  {path:"editar-perfil/:id", component: EditAboutComponent},
  {path:"nuevo-proyecto", component: NewProyectoComponent},
  {path:"editar-proyecto/:id", component: EditProyectoComponent},
  {path:"nueva-skill", component: NewSkillComponent},
  {path:"editar-skill/:id", component: EditSkillsComponent},
  {path:"nueva-educacion", component: NewEducationComponent},
  {path:"editar-educacion/:id", component: EditEducationComponent},
  {path:"nueva-experiencia", component: NewExperienceComponent},
  {path:"editar-experiencia/:id", component: EditExperienciaComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
