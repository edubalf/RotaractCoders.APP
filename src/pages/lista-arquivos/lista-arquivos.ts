import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ArquivoResult } from '../../models/results/arquivo-result';

@Component({
    selector: 'page-lista-arquivos',
    templateUrl: 'lista-arquivos.html',
})
export class ListaArquivosPage {

    lista: ArquivoResult[] = [];
    nome: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.lista = this.navParams.get('lista');
        this.nome = this.lista[0].categoria;
    }

}
