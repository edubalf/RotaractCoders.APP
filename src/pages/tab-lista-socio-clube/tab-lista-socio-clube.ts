import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocioResult } from '../../models/results/socio-result';
import { DetalheSocioIntermediarioPage } from '../detalhe-socio-intermediario/detalhe-socio-intermediario';
import { IonicApp } from 'ionic-angular/components/app/app-root';
import { App } from 'ionic-angular/components/app/app';

@IonicPage()
@Component({
  selector: 'page-tab-lista-socio-clube',
  templateUrl: 'tab-lista-socio-clube.html',
})
export class TabListaSocioClubePage {

  socios: SocioResult[] = [];

  constructor(
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.socios = this.navParams.data;
    console.log(this.socios);
  }

  abrirSocio(socio: SocioResult) {

    
    this.app.getRootNav().push(DetalheSocioIntermediarioPage,
        {
            codigoSocio: socio.codigoSocio,
            codigoClube: socio.codigoClube
        });
  }
}
