import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SocioProvider } from '../../providers/socio/socio';
import { DetalheSocioIntermediarioPage } from '../detalhe-socio-intermediario/detalhe-socio-intermediario';
import { SocioResult } from '../../models/results/socio-result';

@Component({
  selector: 'page-lista-socios',
  templateUrl: 'lista-socios.html',
})
export class ListaSociosPage {

  lista: SocioResult[] = [];

    loader = this.loadingController.create({
        content: 'Carregando...',
    });

    constructor(
        private socioProvider: SocioProvider,
        private loadingController: LoadingController,
        public navCtrl: NavController) {

        this.loader.present().then(() => {
            this.socioProvider.listarTodos().subscribe(data => {

                this.lista = data;

                console.log(this.lista);
                this.loader.dismiss();
            }, err => this.loader.dismiss());
        });
    }

    abrirSocio(socio: SocioResult) {

        this.navCtrl.push(DetalheSocioIntermediarioPage,
            {
                codigoSocio: socio.codigoSocio
            });
    }
}
