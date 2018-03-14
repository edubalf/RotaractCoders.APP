import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalheSocioPage } from '../detalhe-socio/detalhe-socio';

import { SocioResult } from '../../models/results/socio-result';

import { SocioProvider } from '../../providers/socio/socio';


@IonicPage()
@Component({
    selector: 'page-equipe-distrital',
    templateUrl: 'equipe-distrital.html',
    providers: [ 
        SocioProvider
    ]
})
export class EquipeDistritalPage {

    lista: SocioResult[] = [];

    constructor(
        private socioProvider: SocioProvider,
        public navCtrl: NavController,
        public navParams: NavParams) {
        
            this.socioProvider.listar("100").subscribe(data => {
                
                this.lista = data;
            });
    }

    abrirSocio(socio: SocioResult) {
        
        this.navCtrl.push(DetalheSocioPage, { socio: socio });
    }

}
