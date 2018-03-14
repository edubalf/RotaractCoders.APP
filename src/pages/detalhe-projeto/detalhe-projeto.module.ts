import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheProjetoPage } from './detalhe-projeto';

@NgModule({
  declarations: [
    DetalheProjetoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheProjetoPage),
  ],
})
export class DetalheProjetoPageModule {}
