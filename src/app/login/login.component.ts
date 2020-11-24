import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service ';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'sourabh-stack';
  password = '';
  errorMessage = 'InvalidLogin';
  invalidLogin=false;
  //
  constructor(private router: Router, private hardcodedAuthenticationservice: HardcodedAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService) { }

  ngOnInit() {
  }
handleLogin(){
// if(this.username==='sourabh-stack' && this.password==='hellofs') 
 if(this.hardcodedAuthenticationservice.authenticate(this.username,this.password)){
  this.router.navigate(['welcome', this.username])
  this.invalidLogin=false
  
}  
  else{
  this.invalidLogin=true;
}
 
}


handleJWTAuthLogin(){
  // if(this.username==='sourabh-stack' && this.password==='hellofs') 
   this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password).subscribe(
     data=> {
       console.log(data)
      this.router.navigate(['welcome', this.username])
      this.invalidLogin=false
    },
    error=> {
      console.log(error)
      this.invalidLogin=true;
    }
   )
   
  }

}
