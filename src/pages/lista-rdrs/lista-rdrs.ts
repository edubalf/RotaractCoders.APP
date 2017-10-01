import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RdrResult } from '../../models/results/rdr-result';

@IonicPage()
@Component({
    selector: 'page-lista-rdrs',
    templateUrl: 'lista-rdrs.html',
})
export class ListaRdrsPage {

    lista: RdrResult[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.lista.push({
            foto: "assets/fotos/rdrs/alex.jpg",
            anoRotario: "2017~2018",
            clube: "Suzano",
            nome: "Alex Henrique Silva"
        });

        this.lista.push({
            foto: "assets/fotos/rdrs/paixao.jpg",
            anoRotario: "2016~2017",
            clube: "Cambuci",
            nome: "Paixao"
        });

        this.lista.push({
            foto: "assets/fotos/rdrs/vital.jpg",
            anoRotario: "2015~2016",
            clube: "Vila Galvão",
            nome: "Lucas Vital"
        });

        this.lista.push({
            foto: "assets/fotos/rdrs/arthur.jpg",
            anoRotario: "2014~2015",
            clube: "Vila Formoza",
            nome: "Arthur"
        });

        this.lista.push({
            foto: "assets/fotos/rdrs/paulinho.jpg",
            anoRotario: "2013~2014",
            clube: "Poa",
            nome: "Paulo Victhor"
        });

        this.lista.push({
            foto: "assets/fotos/rdrs/de.jpg",
            anoRotario: "2012~2013",
            clube: "Guarulhos Sul",
            nome: "André Coelho"
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListaRdrsPage');
    }

}
