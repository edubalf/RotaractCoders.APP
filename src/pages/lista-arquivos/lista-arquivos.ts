import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DownloadResult } from '../../models/results/download-result';

@IonicPage()
@Component({
    selector: 'page-lista-arquivos',
    templateUrl: 'lista-arquivos.html',
})
export class ListaArquivosPage {

    download: DownloadResult;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.download = this.navParams.get('download');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListaArquivosPage');
    }

}
