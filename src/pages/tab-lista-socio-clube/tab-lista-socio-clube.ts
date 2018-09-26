import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocioResult } from '../../models/results/socio-result';
import { DetalheSocioIntermediarioPage } from '../detalhe-socio-intermediario/detalhe-socio-intermediario';
import { App } from 'ionic-angular/components/app/app';
import { Config } from '../../config';

@Component({
  selector: 'page-tab-lista-socio-clube',
  templateUrl: 'tab-lista-socio-clube.html',
})
export class TabListaSocioClubePage {

  socios: SocioResult[] = [];
  config: Config = new Config();

  constructor(
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.socios = this.navParams.data;

    console.log(this.socios);
    console.log(this.config);

    for (var i = 0; i < this.socios.length; i++) {

      if (this.socios[i].cargos == null) continue;

      var cargoAtual = this.socios[i].cargos.filter(x => 
        x.tipoCargo == "Clube" &&
        new Date(x.gestaoDe) >= this.config.gestaoDe && 
        (new Date(x.gestaoAte).getFullYear() < 1000 || new Date(x.gestaoAte) <= this.config.gestaoAte));

      if (cargoAtual == null || cargoAtual.length <= 0) {
        this.socios[i].cargoAtual = "Sócio";
      } else {
        this.socios[i].cargoAtual = cargoAtual[0].nome;
      }
    }
  }

  abrirSocio(socio: SocioResult) {
    
    this.app.getRootNav().push(DetalheSocioIntermediarioPage,
        {
            codigoSocio: socio.codigoSocio,
            codigoClube: socio.codigoClube
        });
  }
}
