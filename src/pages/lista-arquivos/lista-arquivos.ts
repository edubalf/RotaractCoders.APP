import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ArquivoResult } from '../../models/results/arquivo-result';

@IonicPage()
@Component({
    selector: 'page-lista-arquivos',
    templateUrl: 'lista-arquivos.html',
})
export class ListaArquivosPage {

    download: ArquivoResult;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.download = this.navParams.get('download');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListaArquivosPage');
    }

}
