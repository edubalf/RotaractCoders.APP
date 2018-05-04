import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { AgendaResult } from '../../models/results/agenda-result';
import { EventoProvider } from '../../providers/evento/evento';
import { DetalheAgendaPage } from '../detalhe-agenda/detalhe-agenda';

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {

  lista: AgendaResult[] = [];

  loader = this.loadingController.create({
    content: 'Carrgegando lista de eventos...',
  });

  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    public navParams: NavParams,
    public eventoProvider: EventoProvider) {

      this.loader.present().then(() => {

        this.eventoProvider.listar().then(data => {
          
          this.lista = data;
          console.log(this.lista);
          
          this.loader.dismiss();
        }, err => this.loader.dismiss());
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  abrirDetalhe(evento) {
    this.navCtrl.push(DetalheAgendaPage, { evento: evento });
  }
}
