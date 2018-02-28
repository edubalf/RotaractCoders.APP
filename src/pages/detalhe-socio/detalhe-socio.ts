import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocioResult } from '../../models/results/socio-result';
import { DetalheClubePage } from '../detalhe-clube/detalhe-clube';
import { ClubeProvider } from '../../providers/clube/clube';
import { ClubeResult } from '../../models/results/clube-result';

@IonicPage()
@Component({
  selector: 'page-detalhe-socio',
  templateUrl: 'detalhe-socio.html',
  providers: [
    ClubeProvider
  ]
})
export class DetalheSocioPage {

  socio: SocioResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, private clubeProvider: ClubeProvider) {
    this.socio = navParams.get('socio');
  }

  abrirClube(nomeClube: string) {

    this.clubeProvider.listar().then(lista => {
        var clubes: ClubeResult[] = lista;
        var clube: ClubeResult = clubes.filter(x => x.nome == nomeClube)[0];
        this.navCtrl.push(DetalheClubePage, { clube: clube });
    });
}
}
