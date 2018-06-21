import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocioResult } from '../../models/results/socio-result';
import { ClubeResult } from '../../models/results/clube-result';
import { ClubeProvider } from '../../providers/clube/clube';
import { DetalheClubeIntermediarioPage } from '../detalhe-clube-intermediario/detalhe-clube-intermediario';
import { App } from 'ionic-angular/components/app/app';

@IonicPage()
@Component({
  selector: 'page-tab-dados-socio',
  templateUrl: 'tab-dados-socio.html',
})
export class TabDadosSocioPage {

  socio: SocioResult = new SocioResult();
  clube: ClubeResult = new ClubeResult();

  constructor(
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    private clubeProvider: ClubeProvider) {

    this.socio = this.navParams.data.socio;
    this.clube = this.navParams.data.clube;
  }

  abrirClube(codigoClube: string) {

    this.app.getRootNav().push(DetalheClubeIntermediarioPage, { codigoClube: codigoClube });    
  }
}
