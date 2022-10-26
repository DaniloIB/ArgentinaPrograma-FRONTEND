import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';

import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { NewExperienceComponent } from './components/experience/new-experience/new-experience.component';
import { NewEducationComponent } from './components/education/new-education/new-education.component';
import { NewSkillComponent } from './components/skills/new-skills/new-skill.component';
import { NewProyectoComponent } from './components/projects/new-proyecto/new-proyecto.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { EditExperienciaComponent } from './components/experience/edit-experiencia/edit-experiencia.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { EditProyectoComponent } from './components/projects/edit-proyecto/edit-proyecto.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { EditAboutComponent } from './components/about-me/edit-about/edit-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    LogoApComponent,
    SocialIconsComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    DashboardHomeComponent,
    NewExperienceComponent,
    NewEducationComponent,
    NewSkillComponent,
    NewProyectoComponent,
    EditExperienciaComponent,
    EditEducationComponent,
    EditProyectoComponent,
    EditSkillsComponent,
    EditAboutComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
