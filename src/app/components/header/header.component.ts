import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  isLogged:boolean = false;

  constructor( private router: Router, 
               private tokenService : TokenService,
               ) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    this.ngOnInit();
    this.router.navigate(["/home"]);
    window.location.reload();
  }

  login(){
    this.isLogged = null;
    this.router.navigate(["/login"]);
  }

}