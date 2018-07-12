import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { ClubeResult } from '../../models/results/clube-result';
import { ClubeProvider } from '../../providers/clube/clube';
import { DetalheClubeIntermediarioPage } from '../detalhe-clube-intermediario/detalhe-clube-intermediario';

@Component({
    selector: 'page-clubes',
    templateUrl: 'clubes.html',
    providers: [
        ClubeProvider
    ]
})
export class ClubesPage {

    lista: ClubeResult[] = [];

    loader = this.loadingController.create({
        content: 'Carregando...',
    });

    constructor(
        private clubeProvider: ClubeProvider,
        private loadingController: LoadingController,
        public navCtrl: NavController,
        public navParams: NavParams) {

        this.loader.present().then(() => {
            this.clubeProvider.listar().subscribe(data => {
                this.lista = data;

                this.lista = this.lista.filter(x => x.dataFechamento == null);

                this.loader.dismiss();
            }, err => this.loader.dismiss());
        });
    }

    abrirClube(codigoClube: string) {

        this.navCtrl.push(DetalheClubeIntermediarioPage, {
            codigoClube: codigoClube
        });
    }
}
