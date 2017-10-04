import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FaqResult } from '../../models/results/faq-result';

@IonicPage()
@Component({
    selector: 'page-faq',
    templateUrl: 'faq.html',
})
export class FaqPage {

    lista: FaqResult[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.lista.push({
            pergunta: 'O que é Adirc',
            resposta: 'Assembléia Distrital de Rotaract Clubes'
        });

        this.lista.push({
            pergunta: 'O que é Codirc',
            resposta: 'Conferencia Distrital de Rotaract Clubes'
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FaqPage');
    }
}
