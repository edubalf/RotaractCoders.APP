import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheSocioPage } from './detalhe-socio';

@NgModule({
  declarations: [
    DetalheSocioPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheSocioPage),
  ],
})
export class DetalheSocioPageModule {}
