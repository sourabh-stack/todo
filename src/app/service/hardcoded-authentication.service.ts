import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
     console.log('before ' + this.isUserLogedIn())
    if(username==='sourabh-stack' && password==='hellofs'){
      sessionStorage.setItem('authenticateUser', username);
      console.log('after ' + this.isUserLogedIn())
      return true;
      
    }else{
      
      return false;
 
  }
    
  }
  isUserLogedIn(){

    let user = sessionStorage.getItem('authenticateUser')
     return !(user === null);
  }

  userLogedOut(){
   sessionStorage.removeItem('authenticateUser');

  }
}

