import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaArquivosPage } from './lista-arquivos';

@NgModule({
  declarations: [
    ListaArquivosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaArquivosPage),
  ],
})
export class ListaArquivosPageModule {}
