import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetoResult } from '../../models/results/projeto-result';
import { DetalheProjetoPage } from '../detalhe-projeto/detalhe-projeto';
import { App } from 'ionic-angular/components/app/app';

@IonicPage()
@Component({
  selector: 'page-tab-lista-projeto-clube',
  templateUrl: 'tab-lista-projeto-clube.html',
})
export class TabListaProjetoClubePage {

  projetos: ProjetoResult[] = [];

  constructor(
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.projetos = this.navParams.data;
  }

  abrirProjeto(codigoProjeto: string) {

    this.app.getRootNav().push(DetalheProjetoPage, {
        codigoProjeto: codigoProjeto
    });
  }
}
