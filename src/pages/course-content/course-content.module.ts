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
    Ionic2RatingModule
  ],
})
export class CourseContentPageModule {}
