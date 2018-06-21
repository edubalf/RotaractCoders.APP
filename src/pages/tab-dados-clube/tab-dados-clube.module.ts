import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabDadosClubePage } from './tab-dados-clube';

@NgModule({
  declarations: [
    TabDadosClubePage,
  ],
  imports: [
    IonicPageModule.forChild(TabDadosClubePage),
  ],
})
export class TabDadosClubePageModule {}
