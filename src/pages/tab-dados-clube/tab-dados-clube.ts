import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClubeResult } from '../../models/results/clube-result';

@IonicPage()
@Component({
  selector: 'page-tab-dados-clube',
  templateUrl: 'tab-dados-clube.html',
})
export class TabDadosClubePage {

  clube: ClubeResult = new ClubeResult();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.clube = this.navParams.data;
  }
}
