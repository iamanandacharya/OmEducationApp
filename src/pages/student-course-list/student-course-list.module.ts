import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentCourseListPage } from './student-course-list';

@NgModule({
  declarations: [
    StudentCourseListPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentCourseListPage),
  ],
  exports:[
    StudentCourseListPage,
  ],
  entryComponents:[
    StudentCourseListPage
  ]

})
export class StudentCourseListPageModule {}
