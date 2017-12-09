import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from '../pages/login/login';
import {OtpPage} from '../pages/otp/otp';
import {MenuPage} from '../pages/menu/menu';
import {SubmenuPage} from '../pages/submenu/submenu'
import {MapPage} from '../pages/map/map'
import {SignupPage} from '../pages/signup/signup'
import{DashboardPage} from  '../pages/dashboard/dashboard'
import {ProfilePage} from '../pages/profile/profile'

import { StudentCourseListPage } from '../pages/student-course-list/student-course-list';

import { ByeNowPage } from '../pages/bye-now/bye-now';
import { CourseOverviewPage } from '../pages/course-overview/course-overview';
import { CourcePage } from '../pages/cource/cource';
import { LoginWithEmailPage } from '../pages/login-with-email/login-with-email';
import { NativeStorage } from '@ionic-native/native-storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';

import { CourseContentPage } from '../pages/course-content/course-content';
import { GooglePlus } from '@ionic-native/google-plus';
// Import geoLocaiton plugin
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import {LocationAccuracy} from '@ionic-native/location-accuracy';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { HTTP } from '@ionic-native/http';
import { EmailComposer } from '@ionic-native/email-composer';
import { AboutusPage } from '../pages/aboutus/aboutus';

import { ContactusPage } from '../pages/contactus/contactus';

import { AddVisaCardDetailsPage } from '../pages/add-visa-card-details/add-visa-card-details';
import { AddtocartPage } from '../pages/addtocart/addtocart';
import { CoursecategoryPage } from '../pages/coursecategory/coursecategory';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    OtpPage,
    MenuPage,
    SubmenuPage,
    MapPage,
    CourcePage,
    SignupPage,
    ProfilePage,
    DashboardPage,
    LoginWithEmailPage,
    StudentCourseListPage,
    CourseContentPage,
    CourseOverviewPage,
    AboutusPage,
    ContactusPage,
    CoursecategoryPage,
    AddtocartPage,
    ByeNowPage,
    AddVisaCardDetailsPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StudentCourseListPage,
    LoginPage,
    OtpPage,
    MenuPage,
    SubmenuPage,
    MapPage,
    CourcePage,
    SignupPage,
    ProfilePage,
    DashboardPage,
    LoginWithEmailPage,
    CourseContentPage,
    CourseOverviewPage,
    AboutusPage,
    ContactusPage,
    AddtocartPage,
    ByeNowPage,
    CoursecategoryPage,
    AddVisaCardDetailsPage,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    LocationAccuracy,
    Facebook,
    NativeStorage,
    GooglePlus,
    Camera,
    YoutubeVideoPlayer,
    HTTP,
    EmailComposer,
   
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
