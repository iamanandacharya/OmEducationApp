import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
// Import geoLocaiton plugin
import {Geolocation,Geoposition} from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import {LocationAccuracy} from '@ionic-native/location-accuracy'
import {Slides} from 'ionic-angular';


import {LoginPage} from '../login/login'
import {MenuPage} from '../menu/menu'
import {MapPage} from '../map/map'
import { CourcePage } from '../cource/cource';

import {IonicPage} from 'ionic-angular';

//added google variable in somewhere in ionic framework by ionic tem
declare var google;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    //added
    @ViewChild('map') mapElement:ElementRef;
    @ViewChild(Slides) slides:Slides;

  public location:string;
  public myAddress:string = "hello"
 

  constructor(public navCtrl: NavController,public locationAcccuracy:LocationAccuracy,public toaster: ToastController,public nativeGeocoder: NativeGeocoder,public geoLocation:Geolocation) {
    this.location = "homeDelivery";
  }
  slideChanged(){
    this.slides.slideNext(1100,false);
   
   
  
  }

  
  //Geoclocation - geocoding pulugin method ..

  loadMapMethod(){
     let options = {
        enableHighAccuracy: true
      };
      
     

       
   this.locationAcccuracy.canRequest().then((canRequest:boolean)=>{
    if(canRequest){
      this.locationAcccuracy.request(this.locationAcccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() =>{
        this.geoLocation.getCurrentPosition(options).then((position:Geoposition) =>{
          this.getcountry(position);
        }).catch((err) => {
          alert(err)
        })
      },(error)=>{
          alert(error)
      }
      )
    }
  })
      
    }
    
    getcountry(position) {
    this.nativeGeocoder.reverseGeocode(position.coords.latitude, position.coords.longitude).then((res: NativeGeocoderReverseResult) => {
        let country = this.toaster.create({
          message:  res.subLocality+ res.locality + res.countryName + res.postalCode,
          duration: 40000
        });
        country.present();
      })
    
    }
  locationMethod(){
    this.navCtrl.push('MapPage');
  }
  menuClick($event){
    this.navCtrl.push('MenuPage');
  }
  valueOffer($event){

  }
  doLogin(){
    this.navCtrl.push('LoginPage')
  }
  itCourceList(){
    this.navCtrl.push('CourcePage')
  }
  /*this method is for getting current location and display marker 
   it is useful when we want to  display current location of user,compony and office 
    loadMap(){
    let map: any
  //show map and timeout of map
  let posPosition = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 0
  }
  
    this.geoLocation.getCurrentPosition(posPosition).then(function (position) {
     let lat = position.coords.latitude;
     let long= position.coords.longitude;
      
     let latlang = new google.maps.LatLng(lat,long);
     
     //showing map-option and display map 
     let mapOption = {
        center : latlang,
        zoom : 15,
        mapTypeId:google.maps.MapTypeId.ROADMAP
        
      }
      
       let geocoder = new google.maps.Geocoder();
    
      
      //get mapcanvas id from map.html page
      let map= new google.maps.Map(document.getElementById("mapcanvas"),mapOption);
      //display marker on current location
      let marker = new google.maps.Marker({
        animation:google.maps.Animation.DROP,
        position:latlang,
        draggable:true,
        map:map
      })

      //call method for fetch country name,postal-code, locality  and others
      this.getCountryName(position);
      
      
      console.log(latlang);
      alert(JSON.stringify(latlang))
    },(error)=>{
      console.log(error);
    });
    
  }
//this method is for getting country name and ccountry code and showing toast
  getCountryName(position){
        this.nativeGeocoder.reverseGeocode(position.coords.latitude, position.coords.longitude).then((res: NativeGeocoderReverseResult) => {
      let country = this.toaster.create({
        message:  res.subLocality+ res.locality+ res.postalCode + res.countryName ,
        duration: 40000
      });
      country.present();
    })
  
  }

 
   */

}

