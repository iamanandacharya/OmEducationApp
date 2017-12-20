import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseContentPage } from '../course-content/course-content';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the CourseOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-overview',
  templateUrl: 'course-overview.html',
})
export class CourseOverviewPage {

  public check_status_open:boolean=true;
  public check_status_open_1:boolean=true;
  public button_clicked_1:boolean = true;
  public button_clicked:boolean = true;
  public check_status_close:boolean = false;
  constructor(private streamingMedia:StreamingMedia,public sanitizer: DomSanitizer,public navCtrl: NavController,public youtubePlayer:YoutubeVideoPlayer, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseOverviewPage');
  }
  openCourse(){
    this.button_clicked= true;
  }
  openCourse2(){
    this.button_clicked_1=true;
  }
  closeCourse(){
  this.check_status_open =true;
  this.button_clicked=false;

  }
  closeCourse2(){
    this.check_status_open_1 = true;
    this.button_clicked_1 = false;
  }
  updateVideoUrl(video_id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data, so
    // that it's easier to check if the value is safe.
    let dangerousVideoUrl = 'https://www.youtube.com/embed/dgVQOYEwleA&list=PLdXQYDASjLGKp61f8S9oZLc6be8rXZSZ8&index=2' + video_id + '?rel=0&showinfo=0';
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
    
    
}
  watchVideo(video_id){
      this.youtubePlayer.openVideo(video_id);
  }
  playCourse(){
    this.navCtrl.push(CourseContentPage)
  }
  openVideo(){
    let options:StreamingVideoOptions = {
    successCallback: ()=>{console.log('finished Video')},
    errorCallback: (e)=>{console.log('error',e)},
    orientation: 'landscape'
    };
    this.streamingMedia.playVideo('http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4',options);

  }
}
