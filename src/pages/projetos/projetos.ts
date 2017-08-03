import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetoDetalhesPage } from '../projeto-detalhes/projeto-detalhes';

import { ProjetoProvider } from '../../providers/projeto/projeto';

import { ListaProjetoResult } from '../../models/results/lista-projeto-result'

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage {
  lista: ListaProjetoResult[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public projetoProvider: ProjetoProvider) {

      this.lista = this.projetoProvider.listar();
    }

    selecionar(item:ListaProjetoResult) {
      this.navCtrl.push(ProjetoDetalhesPage, {
        projeto: item
      });
  }
}
