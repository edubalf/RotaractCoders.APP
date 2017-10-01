import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClubeResult } from '../../models/results/clube-result';

@IonicPage()
@Component({
    selector: 'page-clubes',
    templateUrl: 'clubes.html',
})
export class ClubesPage {

    lista: ClubeResult[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.lista.push({
            nome: "Tremembé",
            dataFundacao: "01/01/2011",
            email: "tremembe@tremembe.com",
            facebook: "facebook.com/tremembe",
            horarioReuniao: "1º e 3º domingo do mês às 15h",
            localReuniao: "Rua Francisco Narciso, 191",
            instagram: "@tremembe",
            presidente: "Vitinho"
        });

        this.lista.push({
            nome: "Vila Maria",
            dataFundacao: "01/01/2010",
            email: "vilamaria@vilamaria.com",
            facebook: "facebook.com/vilamaria",
            horarioReuniao: "1º e 3º domingo do mês às 10h",
            localReuniao: "Rua Francisco, 1",
            instagram: "@vilamaria",
            presidente: "Jacque"
        });
    }

    abrirClube(clube: ClubeResult) {

        this.navCtrl.push("page-detalhe-clube", { clube: clube });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ClubesPage');
    }

}
