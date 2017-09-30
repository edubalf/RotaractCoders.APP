import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPresidentesPage } from './lista-presidentes';

@NgModule({
  declarations: [
    ListaPresidentesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPresidentesPage),
  ],
})
export class ListaPresidentesPageModule {}
