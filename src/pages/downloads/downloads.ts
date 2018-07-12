import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ArquivoResult } from '../../models/results/arquivo-result';

import { ListaArquivosPage } from '../lista-arquivos/lista-arquivos';

import { ArquivoProvider } from '../../providers/arquivo/arquivo';

@Component({
    selector: 'page-downloads',
    templateUrl: 'downloads.html',
    providers: [
        ArquivoProvider
    ]
})
export class DownloadsPage {

    lista: ArquivoResult[] = [];
    listaCategorias: string[] = [];

    constructor(
        private arquivoProvider: ArquivoProvider,
        public navCtrl: NavController,
        public navParams: NavParams) {

        this.arquivoProvider.listar().subscribe(data => {
            this.lista = data;

            if (this.lista != null)
                this.listaCategorias = this.lista.map(x => x.categoria).filter((v, i, a) => a.indexOf(v) === i);
        });
    }

    abrirLinks(categoria: string) {
        this.navCtrl.push(ListaArquivosPage, { lista: this.lista.filter(x => x.categoria == categoria) });
    }
}
