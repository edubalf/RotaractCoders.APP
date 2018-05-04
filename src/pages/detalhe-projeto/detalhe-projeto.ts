import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';

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

  loader = this.loadingController.create({
    content: 'Carrgegando lista da equipe distrital...',
  });

  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    public navParams: NavParams,
    private projetoProvider: ProjetoProvider) {
      var codigoProjeto: string = navParams.get('codigoProjeto');

      this.loader.present().then(() => {

        this.projetoProvider.obter(codigoProjeto).subscribe(data => {

          this.projeto = data;
          this.loader.dismiss();
        }, err => this.loader.dismiss());
      });
  }
}
