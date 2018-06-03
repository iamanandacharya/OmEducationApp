import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourseOverviewPage } from './course-overview';

@NgModule({
  declarations: [
    CourseOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseOverviewPage),
  ],
  exports:[
    CourseOverviewPage,
  ],
  entryComponents:[
    CourseOverviewPage
  ]
})
export class CourseOverviewPageModule {}
