import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalheSocioPage } from '../detalhe-socio/detalhe-socio';

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

            this.socioProvider.listarPresidentes(new Date(2018,7,1), new Date(2017,6,30)).subscribe(data => {
                
                this.lista = data;
            });
    }

    abrirSocio(socio: SocioResult) {
        
        this.navCtrl.push(DetalheSocioPage, { socio: socio });
    }
}
