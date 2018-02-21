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

            this.clubeProvider.listar().then(data => {
                this.lista = data;
            });
    }

    abrirClube(clube: ClubeResult) {

        this.navCtrl.push(DetalheClubePage, { clube: clube });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ClubesPage');
    }

}
