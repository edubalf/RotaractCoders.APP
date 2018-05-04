import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { DetalheSocioPage } from '../detalhe-socio/detalhe-socio';
import { SocioClubeResult } from '../../models/results/socio-clube-result';
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

    lista: SocioClubeResult[] = [];

    loader = this.loadingController.create({
        content: 'Carrgegando lista de presidentes...',
    });

    constructor(
        private socioProvider: SocioProvider,
        private loadingController: LoadingController,
        public navCtrl: NavController,
        public navParams: NavParams) {

            this.loader.present().then(() => {
                this.socioProvider.listarPresidentes(new Date(2017,6,1), new Date(2018,6,1)).subscribe(data => {
                    
                    this.lista = data;
                    
                    this.loader.dismiss();
                }, err => this.loader.dismiss());
            });
    }

    abrirSocio(codigoSocio: string) {
        
        this.navCtrl.push(DetalheSocioPage, { 
            codigoSocio: codigoSocio
        });
    }
}
