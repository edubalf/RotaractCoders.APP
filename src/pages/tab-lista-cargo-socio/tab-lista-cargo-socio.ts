import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClubeResult } from '../../models/results/clube-result';
import { SocioResult } from '../../models/results/socio-result';

@Component({
  selector: 'page-tab-lista-cargo-socio',
  templateUrl: 'tab-lista-cargo-socio.html',
})
export class TabListaCargoSocioPage {

  socio: SocioResult = new SocioResult();
  clube: ClubeResult = new ClubeResult();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.socio = this.navParams.data.socio;
    this.clube = this.navParams.data.clube;
  }
}
