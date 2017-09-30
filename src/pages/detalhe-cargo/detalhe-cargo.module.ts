import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheCargoPage } from './detalhe-cargo';

@NgModule({
  declarations: [
    DetalheCargoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheCargoPage),
  ],
})
export class DetalheCargoPageModule {}
