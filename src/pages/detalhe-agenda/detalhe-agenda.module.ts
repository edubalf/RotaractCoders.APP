import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheAgendaPage } from './detalhe-agenda';

@NgModule({
  declarations: [
    DetalheAgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheAgendaPage),
  ],
})
export class DetalheAgendaPageModule {}
