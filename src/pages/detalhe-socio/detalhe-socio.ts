import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { SocioResult } from '../../models/results/socio-result';
import { DetalheClubePage } from '../detalhe-clube/detalhe-clube';
import { ClubeProvider } from '../../providers/clube/clube';
import { SocioProvider } from '../../providers/socio/socio';
import { ClubeResult } from '../../models/results/clube-result';
import { TabDadosSocioPage } from '../tab-dados-socio/tab-dados-socio';
import { TabListaCargoSocioPage } from '../tab-lista-cargo-socio/tab-lista-cargo-socio';
import { TabListaClubeSocioPage } from '../tab-lista-clube-socio/tab-lista-clube-socio';

@IonicPage()
@Component({
  selector: 'page-detalhe-socio',
  templateUrl: 'detalhe-socio.html',
  providers: [
    ClubeProvider,
    SocioProvider
  ]
})
export class DetalheSocioPage {

  tabDados = TabDadosSocioPage;
  tabCargos = TabListaCargoSocioPage;
  tabClubes = TabListaClubeSocioPage;

  socio: SocioResult = new SocioResult();
  clube: ClubeResult = new ClubeResult();

  dados = 
  {
    socio: this.socio,
    clube: this.clube
  };

  codigoSocio: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private clubeProvider: ClubeProvider) {
    
      this.dados = navParams.data;
    }
}
