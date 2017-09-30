import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaRdrsPage } from './lista-rdrs';

@NgModule({
  declarations: [
    ListaRdrsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaRdrsPage),
  ],
})
export class ListaRdrsPageModule {}
