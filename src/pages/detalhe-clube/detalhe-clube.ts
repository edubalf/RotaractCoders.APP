import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClubeResult } from '../../models/results/clube-result';

@IonicPage()
@Component({
    selector: 'page-detalhe-clube',
    templateUrl: 'detalhe-clube.html',
})
export class DetalheClubePage {

    clube: ClubeResult;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.clube = navParams.get('clube');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DetalheClubePage');
    }

}
