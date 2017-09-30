import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaClubesPage } from './lista-clubes';

@NgModule({
  declarations: [
    ListaClubesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaClubesPage),
  ],
})
export class ListaClubesPageModule {}
