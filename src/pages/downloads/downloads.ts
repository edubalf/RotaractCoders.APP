import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DownloadResult } from '../../models/results/download-result';

import { ListaArquivosPage } from '../lista-arquivos/lista-arquivos';

@IonicPage()
@Component({
    selector: 'page-downloads',
    templateUrl: 'downloads.html',
})
export class DownloadsPage {

    lista: DownloadResult[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.lista.push({
            nome: 'Manuais',
            links: [
                {
                    nome: 'Manual do rotaract',
                    link: 'https://my.rotary.org/pt/document/rotaract-handbook'
                },
                {
                    nome: 'Manual do RDR',
                    link: 'https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwjZlKXC_NXWAhVMkpAKHRN5BPUQFggsMAE&url=https%3A%2F%2Fmy.rotary.org%2Fpt%2Fdocument%2Fguide-district-rotaract-representatives&usg=AOvVaw1tONWBuTsbSQLWYZU9PzHg'
                }
            ]
        });
    }

    abrirLinks(download: DownloadResult) {
        this.navCtrl.push(ListaArquivosPage, { download: download });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DownloadsPage');
    }

}
