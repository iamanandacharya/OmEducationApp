import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import {AlertController,App,NavController,MenuController} from 'ionic-angular'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {HTTP, HTTPResponse} from '@ionic-native/http'
import { DashboardPage } from '../../pages/dashboard/dashboard';

/*
  Generated class for the RestApiUrlCallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  let apiUrl = 'http://10.0.2.2:8080/Elearn/rest/user/';
*/
let apiUrl:string = 'http://localhost:8080/Elearn/rest/user/';

@Injectable()
export class RestApiUrlCallProvider {
  
  private loginApiUrl = '';

  
  constructor(public http: Http ,public httpionic:HTTP) {
    console.log('Hello RestApiUrlCallProvider Provider');
  }

login(credentials){
  return new Promise((resolve,reject) => {
    let headers  = new Headers();
    headers.append('Content-Type','application/json');
    // headers.append("Access-Control-Allow-Origin", "*");
    // headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    // headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    this.http.post(apiUrl+'login',JSON.stringify(credentials),{headers:headers})
    .subscribe(res => {
      console.log(res);
    },(err) => {
      reject(err);
    });
  });
}

register(credentials){
  return new Promise((resolve,reject)=>{
    let headers= new Headers();
    headers.append('Content-Type','application/json');
    this.http.post(apiUrl+'register',JSON.stringify(credentials),{headers:headers})
    .subscribe(res => {
      console.log(res);
    },(err) =>{
      reject(err)
    });
  });
}
  // getMessage(){
  //   return this.http.get(this.apiUrl)
  //   .do((res:Response) => console.log(res))
  //   .map((res:Response) => res.json())
  // }
  // postData(credentials,type)
  // {
  //   return new Promise((resolve,reject) => {
  //     let headers = new Headers();
  //     this.http.post(this.apiUrl + type, JSON.stringify(credentials))
  //     .subscribe(res => {
  //       resolve(res.json());
  //     },(err) => {
  //       reject(err);
  //     });
  //   });
  // }
  // loginPostData(credentials,type){
  //   return new Promise((resolve,reject) => {
  //     let headers = new Headers();
  //     this.http.post("http://localhost:8080/Elearn/rest/user/login" ,JSON.stringify(credentials))
  //     .subscribe(res => {
  //       resolve(res.json());
  //     },(err) => {
  //       reject(err);
  //     });
  //   });
  // }

  logout(){
    return new Promise((resolve,reject) =>{
      let headers = new Headers();
      headers.append('x-auth-token', localStorage.getItem('loginData'));
     localStorage.clear();
     
    })
  }

}
