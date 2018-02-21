import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventoProvider: EventoProvider) {

    this.eventoProvider.listar().then(data => {
      console.log(data);
      this.lista = data
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  abrirDetalhe(evento) {
    this.navCtrl.push(DetalheAgendaPage, { evento: evento });
  }
}
