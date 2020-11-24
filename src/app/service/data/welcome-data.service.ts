import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { from } from 'rxjs'

 export class HelloWorldBean {
   constructor(public message : string){}
 }


@Injectable({
  providedIn: 'root'
})



export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
// let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

//     let headers = new HttpHeaders({
//       Authorization: basicAuthHeaderString
  //  })
 return this.http.get<HelloWorldBean>('http://localhost:8080/helloworldbean',//{headers});
   );
  }

  // createBasicAuthenticationHttpHeader(){
  //  let username = 'sogurjar'
  //  let password= 'pavitra'

  //  let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
   
  //  return basicAuthHeaderString;
  // }
}
