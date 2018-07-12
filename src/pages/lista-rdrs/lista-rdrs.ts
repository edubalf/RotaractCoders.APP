import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { SocioClubeResult } from '../../models/results/socio-clube-result';
import { SocioProvider } from '../../providers/socio/socio';
import { DetalheSocioIntermediarioPage } from '../detalhe-socio-intermediario/detalhe-socio-intermediario';

@Component({
    selector: 'page-lista-rdrs',
    templateUrl: 'lista-rdrs.html'
})
export class ListaRdrsPage {

    lista: SocioClubeResult[] = [];

    loader = this.loadingController.create({
        content: 'Carregando...',
    });

    constructor(
        private socioProvider: SocioProvider,
        private loadingController: LoadingController,
        public navCtrl: NavController) {

        this.loader.present().then(() => {
            this.socioProvider.listarRdrs().subscribe(data => {

                this.lista = data;

                this.lista.sort(function (a, b) {
                    if (a.gestaoDe > b.gestaoDe) {
                        return -1;
                    }
                    if (a.gestaoDe < b.gestaoDe) {
                        return 1;
                    }
                    // a must be equal to b
                    return 0;
                });

                this.loader.dismiss();
            }, err => this.loader.dismiss());
        });
    }

    abrirSocio(socio: SocioClubeResult) {

        this.navCtrl.push(DetalheSocioIntermediarioPage,
            {
                codigoSocio: socio.codigoSocio
            });
    }
}
