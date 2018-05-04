import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { SocioResult } from '../../models/results/socio-result';
import { DetalheClubePage } from '../detalhe-clube/detalhe-clube';
import { ClubeProvider } from '../../providers/clube/clube';
import { SocioProvider } from '../../providers/socio/socio';
import { ClubeResult } from '../../models/results/clube-result';

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

  socio: SocioResult = new SocioResult();
  clube: ClubeResult = new ClubeResult();

  loader = this.loadingController.create({
    content: 'Carrgegando lista da equipe distrital...',
  });

  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    public navParams: NavParams, 
    private clubeProvider: ClubeProvider, 
    private socioProvider: SocioProvider) {
    
      var codigoSocio: string = navParams.get('codigoSocio');

      this.loader.present().then(() => {

        this.socioProvider.obterPorCodigoSocio(codigoSocio).subscribe(data => {
          this.socio = data;

          this.clubeProvider.obter(this.socio.codigoClube).subscribe(clube => {
            this.clube = clube;

            this.loader.dismiss();
          }, err => this.loader.dismiss());
        }, err => this.loader.dismiss());
      });
  }

  abrirClube(codigoClube: string) {

    this.clubeProvider.listar().subscribe(lista => {      
        this.navCtrl.push(DetalheClubePage, { codigoClube: codigoClube });
    });
  }
}
