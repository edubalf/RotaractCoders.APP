import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EquipeResult } from '../../models/results/equipe-result';

@IonicPage()
@Component({
    selector: 'page-equipe-distrital',
    templateUrl: 'equipe-distrital.html',
})
export class EquipeDistritalPage {

    lista: EquipeResult[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.lista.push({
            foto: "assets/fotos/equipe-distrital/alex.jpg",
            nome: "Alex",
            cargo: "Representante distrital de Rotaract",
            clube: 'Suzano',
            email: 'alex@rdr.com',
            facebook: 'https://www.facebook.com/alexhenrique88'
        });

        this.lista.push({
            foto: "assets/fotos/equipe-distrital/bia.jpg",
            nome: "Beathriz",
            cargo: "Secretaria distrital",
            clube: 'Ferraz de Vasconcelos',
            email: 'beathiz@secretaria.com',
            facebook: 'https://www.facebook.com/beathriz.giuliana'
        });

        this.lista.push({
            foto: "assets/fotos/equipe-distrital/pig.jpg",
            nome: "Pignatti",
            cargo: "Tesoureiro distrital",
            clube: 'Ferraz de Vasconcelos',
            email: 'pig@tesoureiro.com',
            facebook: 'https://www.facebook.com/henrique.pignatti'
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EquipeDistritalPage');
    }

}
