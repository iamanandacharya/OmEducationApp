import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourcePage } from './cource';

@NgModule({
  declarations: [
    CourcePage,
  ],
  imports: [
    IonicPageModule.forChild(CourcePage),
  ],
})
export class CourcePageModule {}
