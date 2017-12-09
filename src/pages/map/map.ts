import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
// Import geoLocaiton plugin
import {Geolocation,Geoposition } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

//added google variable in somewhere in ionic framework by ionic tem
declare var google;
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  //added
  @ViewChild('map') mapElement:ElementRef;

  // //declare map varible and ID in map.html
  // map:any;
  
  //Make  geoLcoation publicly
  constructor(public navCtrl: NavController,public nativeGeocoder: NativeGeocoder,public navParams: NavParams,public toaster: ToastController, public geoLocation:Geolocation) {
  }

loadMap(){
  let options = {
    enableHighAccuracy: true
  };
  
    this.geoLocation.getCurrentPosition(options).then((position: Geoposition) => {
      
    

      this.getcountry(position);
     
  }).catch((err) => {
  
  })
  
}

getcountry(pos) {

  let lat = pos.coords.latitude;
  let long= pos.coords.longitude;


  this.nativeGeocoder.reverseGeocode(pos.coords.latitude, pos.coords.longitude).then((res: NativeGeocoderReverseResult) => {
    let country = this.toaster.create({
      message:  res.subLocality+ res.locality + res.countryName,
      duration: 90000
    });
    country.present();
  })

}
}

// loadMapMethod(){
//   let options = {
//      enableHighAccuracy: true
//    };
   
  //  this.locationAcccuracy.canRequest().then((canRequest:boolean)=>{
  //    if(canRequest){
  //      this.locationAcccuracy.request(this.locationAcccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() =>{
  //        this.geoLocation.getCurrentPosition(options).then((position:Geoposition) =>{
  //          this.getcountry(position);
  //        }).catch((err) => {
  //          alert(err)
  //        })
  //      },(error)=>{
  //        alert(error)
  //      }

  //      )
  //    }
  //  })

     
   
//  }
 
//  getcountry(position){
//    this.nativeGeocoder.reverseGeocode(position.coords.latitude,position.coords.longtitude).then((res:NativeGeocoderReverseResult) => {
//      let country  = this.toaster.create({
//        message:res.subLocality + res.locality + res.postalCode ,
//        duration:9000
//      });
//      country.present();
//    })
//  }






/* 

let map: any
let posPosition = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 0
}

  this.geoLocation.getCurrentPosition(posPosition).then(function (position) {
    let lat = position.coords.latitude;
    let long= position.coords.longitude;
    
    // let mapOption = {
    //   center : myLatLang,
    //   zoom : 15,
    //   mapTypeId:google.maps.MapTypeId.ROADMAP
      
    // }

    // let map= new google.maps.Map(document.getElementById("mapcanvas"),mapOption);
    // let marker = new google.maps.Marker({
    //   animation:google.maps.Animation.DROP,
    //   position:myLatLang,
    //   draggable:true,
    //   map:map
    // })
    
   
         let geocoder = new google.maps.Geocoder();
         let myLatLang = new google.maps.LatLng(lat,long);
         
        geocoder.geocode({latlong:myLatLang}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                alert("Location: " + results[0].formatted_address + "\r\nLatitude: " +lat + "\r\nLongitude: " +  long) ; 

                console.log("Location: " + results[0].formatted_address + "\r\nLatitude: " +lat + "\r\nLongitude: " +  long) ;
          }
        }
        })
   
  },(error)=>{
    console.log(error);
  });
  
}
// addmarker() { // To Add Marker
//   let marker = new google.maps.Marker({
//     map: this.map,
//     animation: google.maps.Animation.DROP,
//     position: this.map.getCenter()
    
//   },
  
//   (error)=>{
//     console.log(error);
//   });
//   let content = "<h3>My New Location!</h3><h5>by Anish youtube - Please subscribe</h5>";
//   this.addInfoWindow(marker, content);
// }

// addInfoWindow(marker, content) {
//   let infoWindow = new google.maps.InfoWindow({
//     content: content
//   });
//   google.maps.event.addListener(marker, 'click', () => {
//     infoWindow.open(this.map, marker);
//   });
// }
getMap(){
  let options={
    enableHighAccuracy:true,
      timeout: 20000,
  maximumAge: 0
  };
  this.geoLocation.getCurrentPosition(options).then(function (position) 
{
  this.nativeGeocoder.reverseGeocode(position.coords.latitude,position.coords.longitude)
  .then((result: NativeGeocoderReverseResult) => {
    let country = this.toaster.create({
      message:result.countryName,
      duration:400
    });
    country.present();
  })

}).catch((err) =>{
  alert(err);
});
}
// getCountryName(pos){
//   this.nativeGeocoder.reverseGeocode(pos.coords.latitude,pos.coords.longitude)
//   .then((result: NativeGeocoderReverseResult) => {
//     let country = this.toaster.create({
//       message:result.countryName,
//       duration:400
//     });
//     country.present();
//   })

// }

*/