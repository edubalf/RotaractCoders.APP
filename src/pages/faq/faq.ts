import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FaqResult } from '../../models/results/faq-result';

import { FaqProvider } from '../../providers/faq/faq';

@IonicPage()
@Component({
    selector: 'page-faq',
    templateUrl: 'faq.html',
    providers: [
        FaqProvider
    ]
})
export class FaqPage {

    lista: FaqResult[] = [];

    constructor(
        private faqProvider: FaqProvider,
        public navCtrl: NavController,
        public navParams: NavParams) {

            this.faqProvider.listar().then(data => {
                this.lista = data;
            });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FaqPage');
    }
}
