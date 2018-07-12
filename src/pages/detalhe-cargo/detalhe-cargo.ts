import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CargoResult } from '../../models/results/cargo-result';

@Component({
    selector: 'page-detalhe-cargo',
    templateUrl: 'detalhe-cargo.html',
})
export class DetalheCargoPage {

    cargo: CargoResult;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.cargo = navParams.get('cargo');
    }
}
