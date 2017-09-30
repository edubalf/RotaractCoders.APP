import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheClubePage } from './detalhe-clube';

@NgModule({
  declarations: [
    DetalheClubePage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheClubePage),
  ],
})
export class DetalheClubePageModule {}
