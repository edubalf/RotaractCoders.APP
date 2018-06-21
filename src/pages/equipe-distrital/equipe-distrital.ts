import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { SocioClubeResult } from '../../models/results/socio-clube-result';
import { SocioProvider } from '../../providers/socio/socio';
import { DetalheSocioIntermediarioPage } from '../detalhe-socio-intermediario/detalhe-socio-intermediario';

@IonicPage()
@Component({
    selector: 'page-equipe-distrital',
    templateUrl: 'equipe-distrital.html',
    providers: [ 
        SocioProvider
    ]
})
export class EquipeDistritalPage {

    lista: SocioClubeResult[] = [];

    loader = this.loadingController.create({
        content: 'Carrgegando lista da equipe distrital...',
    });

    constructor(
        private socioProvider: SocioProvider,
        private loadingController: LoadingController,
        public navCtrl: NavController,
        public navParams: NavParams) {
        
            this.loader.present().then(() => {
                this.socioProvider.listarEquipeDistrital(new Date(2017,6,1), new Date(2018,6,1)).subscribe(data => {
                    
                    this.lista = data;
                    this.loader.dismiss();
                    
                }, err => this.loader.dismiss());
            });
    }

    abrirSocio(codigoSocio: string) {
        
        this.navCtrl.push(DetalheSocioIntermediarioPage, { 
            codigoSocio: codigoSocio
        });
    }
}
