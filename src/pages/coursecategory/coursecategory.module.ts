import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursecategoryPage } from './coursecategory';

@NgModule({
  declarations: [
    CoursecategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CoursecategoryPage),
  ],
})
export class CoursecategoryPageModule {}
