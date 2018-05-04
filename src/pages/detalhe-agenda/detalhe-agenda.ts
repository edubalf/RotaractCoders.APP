import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { AgendaResult } from '../../models/results/agenda-result';

@IonicPage()
@Component({
  selector: 'page-detalhe-agenda',
  templateUrl: 'detalhe-agenda.html',
})
export class DetalheAgendaPage {

  evento: AgendaResult;

  loader = this.loadingController.create({
    content: 'Carrgegando lista de eventos...',
  });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private loadingController: LoadingController) {

      this.loader.present().then(() => {

        this.evento = navParams.get('evento');
        this.loader.dismiss();
      });
  }
}
