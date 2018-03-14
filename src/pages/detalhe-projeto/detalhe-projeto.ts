import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProjetoResult } from '../../models/results/projeto-result';

import { ProjetoProvider } from '../../providers/projeto/projeto';

@IonicPage()
@Component({
  selector: 'page-detalhe-projeto',
  templateUrl: 'detalhe-projeto.html',
  providers: [
    ProjetoProvider
  ]
})
export class DetalheProjetoPage {

  projeto: ProjetoResult = new ProjetoResult();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private projetoProvider: ProjetoProvider) {
      var codigoProjeto: string = navParams.get('codigoProjeto');

      this.projetoProvider.obter(codigoProjeto).subscribe(data => {

        this.projeto = data;
        console.log(this.projeto);
      });
  }
}
