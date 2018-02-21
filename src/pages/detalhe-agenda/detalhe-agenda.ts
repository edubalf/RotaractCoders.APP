import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendaResult } from '../../models/results/agenda-result';

@IonicPage()
@Component({
  selector: 'page-detalhe-agenda',
  templateUrl: 'detalhe-agenda.html',
})
export class DetalheAgendaPage {

  evento: AgendaResult;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.evento = navParams.get('evento');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheAgendaPage');
  }

}
