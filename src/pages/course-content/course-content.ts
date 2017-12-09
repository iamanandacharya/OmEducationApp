import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { DomSanitizer } from '@angular/platform-browser';

import { CourseOverviewPage } from '../course-overview/course-overview';

import { ByeNowPage } from '../bye-now/bye-now';
import { AddtocartPage } from '../addtocart/addtocart';
/**
 * Generated class for the CourseContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-content',
  templateUrl: 'course-content.html',
})
export class CourseContentPage {
  public video_id:any = "AIzaSyBZIcdTCkD-TYMfJ-dVgd_phIgjHxhC0ws";
  constructor(public sanitizer: DomSanitizer,public navCtrl: NavController,public youtubePlayer:YoutubeVideoPlayer, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseContentPage');
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
  byeNow(){
    this.navCtrl.push(ByeNowPage)
  }
  addToCart(){
    this.navCtrl.push(AddtocartPage);
  }
}
