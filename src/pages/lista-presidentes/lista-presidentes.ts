import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PresidenteResult } from '../../models/results/presidente-result';

@IonicPage()
@Component({
    selector: 'page-lista-presidentes',
    templateUrl: 'lista-presidentes.html',
})
export class ListaPresidentesPage {

    lista: PresidenteResult[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.lista.push({
            foto: 'assets/fotos/presidentes/aurelio.jpg',
            clube: 'norte',
            email: 'aurelio@norte.com',
            facebook: 'face.com/aurelio',
            nome: 'Aurelio'
        });

        this.lista.push({
            foto: 'assets/fotos/presidentes/bruno.jpg',
            clube: 'Pirituba',
            email: 'bruno@pirituba.com',
            facebook: 'face.com/bruno',
            nome: 'Bruno'
        });

        this.lista.push({
            foto: 'assets/fotos/presidentes/cris.jpg',
            clube: 'Freguesia',
            email: 'chris@freguesia.com',
            facebook: 'face.com/chris',
            nome: 'Chris'
        });

        this.lista.push({
            foto: 'assets/fotos/presidentes/jaque.jpg',
            clube: 'Vila Maria',
            email: 'jacque@vilamaria.com',
            facebook: 'face.com/jacque',
            nome: 'Jacque'
        });

        this.lista.push({
            foto: 'assets/fotos/presidentes/vitinho.jpg',
            clube: 'Tremembé',
            email: 'vitinho@tremembe.com',
            facebook: 'face.com/vitinho',
            nome: 'Vitinho'
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListaPresidentesPage');
    }

}
