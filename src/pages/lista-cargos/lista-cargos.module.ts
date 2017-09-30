import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCargosPage } from './lista-cargos';

@NgModule({
  declarations: [
    ListaCargosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCargosPage),
  ],
})
export class ListaCargosPageModule {}
