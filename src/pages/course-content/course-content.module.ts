import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseContentPage } from './course-content';

@NgModule({
  declarations: [
    CourseContentPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseContentPage),
  ],
})
export class CourseContentPageModule {}
