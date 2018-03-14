import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClubeResult } from '../../models/results/clube-result';

import { DetalheClubePage } from '../detalhe-clube/detalhe-clube';

import { ClubeProvider } from '../../providers/clube/clube';

@IonicPage()
@Component({
    selector: 'page-clubes',
    templateUrl: 'clubes.html',
    providers: [
        ClubeProvider
    ]
})
export class ClubesPage {

    lista: ClubeResult[] = [];

    constructor(
        private clubeProvider: ClubeProvider,
        public navCtrl: NavController,
        public navParams: NavParams) {

            this.clubeProvider.listar().subscribe(data => {
                this.lista = data;

                this.lista = this.lista.filter(x => x.dataFechamento == null);
            });
    }

    abrirClube(codigoClube: string) {

        //console.log(codigoClube);
        this.navCtrl.push(DetalheClubePage, { codigoClube: codigoClube });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ClubesPage');
    }

}
