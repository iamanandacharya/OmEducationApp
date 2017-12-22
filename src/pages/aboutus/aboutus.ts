import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestApiUrlCallProvider } from '../../providers/rest-api-url-call/rest-api-url-call';
import { Http,Response,Headers } from '@angular/http';

/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {
users:any;
dataValue:any;
  constructor(public navCtrl: NavController,public restProvider:RestApiUrlCallProvider,private http:Http, public navParams: NavParams) {
   
  }
//display data by click button
  displayFunction(dataValue){
    this.restProvider.displayData().then(res => {
      this.dataValue = res
      console.log(this.dataValue);
      console.log(res);

    },
  (err) =>{
    console.log(err)
  })
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutusPage');
    /*
    simple syntax of get method

    this.http.get("write url here")
    .subscribe(
      name_of_object => 
      {
        object converted in array

      //data are formate in json
      this.users = data.json();
      //user object is converted in array
      this.users = Array.of(this.users);
    console.log(object_array);
    },
     err=> {

     })
    
     syntax of http post method
     let header = new Headers();
     header.content('key','value')
     this.http.post("write url here",data_object,{header object})
     .subscribe(
       res => 
       {
         console.log()
      }, 
      (err) => 
      {
        reject(err)
        console.log(err)
      });
    
    */
 //   call api
    this.http.get('https://api.github.com/users/seeschweiler')
    
    .subscribe(data => {
      //data are formate in json
      this.users = data.json();
      //user object is converted in array
      this.users = Array.of(this.users);
      console.log(data);
    }, err=>{
      console.log(err)
    })
    
  }

}
