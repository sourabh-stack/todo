import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  // authenticate(username, password){
  //    console.log('before ' + this.isUserLogedIn())
  //   if(username==='sourabh-stack' && password==='hellofs'){
  //     sessionStorage.setItem('authenticateUser', username);
  //     console.log('after ' + this.isUserLogedIn())
  //     return true;
      
  //   }else{
      
  //     return false;
 
  // }
  // }


  executeJWTAuthenticationService(username, password){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    
        let headers = new HttpHeaders({
          Authorization: basicAuthHeaderString
        })
     return this.http.post<any>(`${API_URL}/authenticate`,{
    username,
    password
     }).pipe
     (
       map
     ( 
       data =>{
      sessionStorage.setItem('authenticateUser', username);
      sessionStorage.setItem('token',`Bearer ${data.token}`);
      return data;
       } 
       )
     
     );
       
      }



  executeAuthenticationService(username, password){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    
        let headers = new HttpHeaders({
          Authorization: basicAuthHeaderString
        })
     return this.http.get<AuthenticationBean>('http://localhost:8080/basicauth',{headers}).pipe
     (
       map
     ( 
       data =>{
      sessionStorage.setItem('authenticateUser', username);
      sessionStorage.setItem('token',basicAuthHeaderString);
      return data;
       } 
       ) ); }
    




     
      getAuthenticatedUser(){
       return sessionStorage.getItem('authenticateUser')
         
      }


      getAuthenticatedToken(){
        if(this.getAuthenticatedUser){
        return sessionStorage.getItem('token')
        }
      }
  
  
  isUserLogedIn(){
    let user = sessionStorage.getItem('authenticateUser')
     return !(user === null);
  }

  userLogedOut(){
   sessionStorage.removeItem('authenticateUser');
   sessionStorage.removeItem('token');
  }

}

export class AuthenticationBean{
constructor(public message:string){}

}


