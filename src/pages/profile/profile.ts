import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Slides} from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  @ViewChild(Slides) slides:Slides;
  public cameraData: string;
  public cameraUrl:string;
  constructor(public navCtrl: NavController,public menuCtrl:MenuController,public camera:Camera, public navParams: NavParams) {
   
  }
  photoTaken:boolean;
  
  photoSelected:boolean;


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  slideChanged(){
    this.slides.slideNext(1100,false);
  }
  selectedFromGallery(){

    let options: CameraOptions = {
      quality:75,
      destinationType:this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit:true,
      encodingType:this.camera.EncodingType.JPEG,
      targetWidth:300,
      targetHeight:300,
    
      
        }
        this.camera.getPicture(options).then((imageData) => {
      this.cameraUrl = 'data:image/jpeg;base64,'+imageData;;
     
        },(err) =>{
          console.log(err)
        });

  }

  openCamera(){
    let options: CameraOptions={
      quality:75,
      destinationType:this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.CAMERA,
      allowEdit:true,
      encodingType:this.camera.EncodingType.JPEG,
      targetWidth:300,
      targetHeight:300,
     
  
    }
    this.camera.getPicture(options).then((imageData) => {
      this.cameraData = 'data:image/jpeg;base64,'+imageData;
      
        },(err) =>{
          console.log(err)
        });
      }
}
