import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ArquivoResult } from '../../models/results/arquivo-result';

import { ListaArquivosPage } from '../lista-arquivos/lista-arquivos';

import { ArquivoProvider } from '../../providers/arquivo/arquivo';

@IonicPage()
@Component({
    selector: 'page-downloads',
    templateUrl: 'downloads.html',
    providers: [
        ArquivoProvider
    ]
})
export class DownloadsPage {

    lista: ArquivoResult[] = [];

    constructor(
        private arquivoProvider: ArquivoProvider,
        public navCtrl: NavController,
        public navParams: NavParams) {

        this.arquivoProvider.listar().then(data => {
            this.lista = data;
        });
    }

    abrirLinks(download: ArquivoResult) {
        this.navCtrl.push(ListaArquivosPage, { download: download });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DownloadsPage');
    }

}
