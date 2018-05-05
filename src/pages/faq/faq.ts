import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
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

    loader = this.loadingController.create({
        content: 'Carregando perguntas frequentes...',
    });

    constructor(
        private faqProvider: FaqProvider,
        public navCtrl: NavController,
        public navParams: NavParams,
        private loadingController: LoadingController) {

            this.loader.present().then(() => {
                this.faqProvider.listar().subscribe(data => {
                    
                    this.lista = data;
                    
                    this.loader.dismiss();

                }, err => this.loader.dismiss());
            });
    }
}
