import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListaProjetoResult } from '../../models/results/lista-projeto-result'
/**
 * Generated class for the ProjetoDetalhesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projeto-detalhes',
  templateUrl: 'projeto-detalhes.html',
})
export class ProjetoDetalhesPage {
  projeto: ListaProjetoResult

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projeto = navParams.get('projeto');
  }
}
