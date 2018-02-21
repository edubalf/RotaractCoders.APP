import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SocioResult } from '../../models/results/socio-result';

import { SocioProvider } from '../../providers/socio/socio';


@IonicPage()
@Component({
    selector: 'page-lista-presidentes',
    templateUrl: 'lista-presidentes.html',
    providers: [
        SocioProvider
    ]
})
export class ListaPresidentesPage {

    lista: SocioResult[] = [];

    constructor(
        private socioProvider: SocioProvider,
        public navCtrl: NavController,
        public navParams: NavParams) {

            this.socioProvider.listar().then(data => {
                
                this.lista = data;
                this.lista = this.lista.filter(x => x.cargos.filter(cargo => cargo.nome == 'Presidente' && cargo.gestaoDe == 18).length > 0);
            });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListaPresidentesPage');
    }

}
