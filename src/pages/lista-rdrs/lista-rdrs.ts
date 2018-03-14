import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocioClubeResult } from '../../models/results/socio-clube-result';
import { SocioProvider } from '../../providers/socio/socio';
import { DetalheSocioPage } from '../detalhe-socio/detalhe-socio';

@IonicPage()
@Component({
    selector: 'page-lista-rdrs',
    templateUrl: 'lista-rdrs.html',
    providers: [ 
        SocioProvider
    ]
})
export class ListaRdrsPage {

    lista: SocioClubeResult[] = [];

    constructor(
        private socioProvider: SocioProvider,
        public navCtrl: NavController,
        public navParams: NavParams) {

            this.socioProvider.listarRdrs().subscribe(data => {
                
                this.lista = data;

                this.lista.sort(function(a, b) {
                    if (a.gestaoDe > b.gestaoDe) {
                        return -1;
                      }
                      if (a.gestaoDe < b.gestaoDe) {
                        return 1;
                      }
                      // a must be equal to b
                      return 0;
                  });
            });
        }

        abrirSocio(socio: SocioClubeResult) {

            this.navCtrl.push(DetalheSocioPage, 
            { 
                codigoSocio: socio.codigoSocio
            });
        }
}
