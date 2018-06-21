import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SocioResult } from '../../models/results/socio-result';
import { ClubeResult } from '../../models/results/clube-result';
import { ClubeProvider } from '../../providers/clube/clube';
import { SocioProvider } from '../../providers/socio/socio';
import { DetalheSocioPage } from '../detalhe-socio/detalhe-socio';

@IonicPage()
@Component({
  selector: 'page-detalhe-socio-intermediario',
  templateUrl: 'detalhe-socio-intermediario.html',
})
export class DetalheSocioIntermediarioPage {

  socio: SocioResult = new SocioResult();
  clube: ClubeResult = new ClubeResult();

  dados = 
  {
    socio: this.socio,
    clube: this.clube
  };

  codigoSocio: string;

  loader = this.loadingController.create({
    content: 'Carregando dados do sócio...',
  });

  constructor(
    public navCtrl: NavController, 
    private loadingController: LoadingController,
    public navParams: NavParams, 
    private clubeProvider: ClubeProvider, 
    private socioProvider: SocioProvider) {

    this.codigoSocio = navParams.get('codigoSocio');

    this.loader.present().then(() => {

      this.socioProvider.obterPorCodigoSocio(this.codigoSocio).subscribe(data => {
        this.socio = data;

        this.socio.cargos = this.socio.cargos.sort((a, b) => {
          if (a.gestaoDe < b.gestaoDe) {
            return 1;
          }
  
          if (a.gestaoDe > b.gestaoDe) {
            return -1;
          }
  
          return 0; 
        });

        this.socio.clubes = this.socio.clubes.sort((a, b) => {
          if (a.posse < b.posse) {
            return 1;
          }
  
          if (a.posse > b.posse) {
            return -1;
          }
  
          return 0; 
        });

        console.log(this.socio);

        this.clubeProvider.obter(this.socio.codigoClube).subscribe(clube => {
          this.clube = clube;

          this.dados.socio = this.socio;
          this.dados.clube = this.clube;

          this.loader.dismiss();

          this.navCtrl.push(DetalheSocioPage, 
          {
              socio: this.socio,
              clube: this.clube
          });

          this.navCtrl.remove(this.navCtrl.length() - 1, 1);

        }, err => this.loader.dismiss());
      }, err => this.loader.dismiss());
    });

  }
}
