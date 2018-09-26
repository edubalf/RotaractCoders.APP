import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocioResult } from '../../models/results/socio-result';
import { ClubeResult } from '../../models/results/clube-result';
import { DetalheClubeIntermediarioPage } from '../detalhe-clube-intermediario/detalhe-clube-intermediario';
import { App } from 'ionic-angular/components/app/app';

@Component({
  selector: 'page-tab-dados-socio',
  templateUrl: 'tab-dados-socio.html',
})
export class TabDadosSocioPage {

  socio: SocioResult = new SocioResult();
  clube: ClubeResult = new ClubeResult();

  contadorAudio: number = 0;

  constructor(
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.socio = this.navParams.data.socio;
    this.clube = this.navParams.data.clube;
  }

  abrirClube(codigoClube: string) {

    this.app.getRootNav().push(DetalheClubeIntermediarioPage, { codigoClube: codigoClube });    
  }

  clickFotoSocio() {

    if (this.socio.codigoSocio == "17831") {
      this.contadorAudio++;
    }

    if (this.contadorAudio == 15) {

      var snd = new Audio("assets/mp3/obama.mp3");
      snd.play();

      setTimeout(function(){ 
        snd.pause();
        snd.currentTime = 0;
      }, 2000);

      this.contadorAudio = 0;
    }
  }
}
