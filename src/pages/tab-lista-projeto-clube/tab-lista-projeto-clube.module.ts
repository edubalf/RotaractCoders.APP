import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabListaProjetoClubePage } from './tab-lista-projeto-clube';

@NgModule({
  declarations: [
    TabListaProjetoClubePage,
  ],
  imports: [
    IonicPageModule.forChild(TabListaProjetoClubePage),
  ],
})
export class TabListaProjetoClubePageModule {}
