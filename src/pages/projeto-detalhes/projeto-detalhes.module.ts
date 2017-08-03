import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetoDetalhesPage } from './projeto-detalhes';

@NgModule({
  declarations: [
    ProjetoDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetoDetalhesPage),
  ],
})
export class ProjetoDetalhesPageModule {}
