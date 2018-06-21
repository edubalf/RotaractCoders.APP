import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabDadosSocioPage } from './tab-dados-socio';

@NgModule({
  declarations: [
    TabDadosSocioPage,
  ],
  imports: [
    IonicPageModule.forChild(TabDadosSocioPage),
  ],
})
export class TabDadosSocioPageModule {}
