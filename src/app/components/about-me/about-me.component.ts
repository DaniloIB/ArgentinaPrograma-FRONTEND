import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about.model';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SAboutService } from 'src/app/service/s-about.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  persona:persona = new persona("","","","","");
  about:About = new About("","");
  isLogged = false;

  
  constructor( public personaSvc : PersonaService, private tokenService:TokenService, private sAboutService:SAboutService ) { }

  ngOnInit(): void {
    this.cargarPersona();
    this.cargarAbout();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarAbout():void{
    this.sAboutService.detail(3).subscribe(
      data => {this.about = data;}
    )
  }

  cargarPersona():void{
    this.personaSvc.getPersona().subscribe(data => {
      this.persona = data;
    })
  }

}
