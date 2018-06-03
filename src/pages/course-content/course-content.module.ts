import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseContentPage } from './course-content';

import { Ionic2RatingModule } from 'ionic2-rating';
@NgModule({
  declarations: [
    CourseContentPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseContentPage),
    //use lazy module for rating compoment thats why Ionic2rating import in here
    Ionic2RatingModule
  ],
  exports:[
    Ionic2RatingModule,
    CourseContentPage,
  ],
  entryComponents:[
    CourseContentPage
  ]
})
export class CourseContentPageModule {}
