import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocioResult } from '../../models/results/socio-result';
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

    lista: SocioResult[] = [];

    constructor(
        private socioProvider: SocioProvider,
        public navCtrl: NavController,
        public navParams: NavParams) {

            this.socioProvider.listar().then(data => {
                
                this.lista = data;
                this.lista = this.lista.filter(x => x.cargos.filter(cargo => cargo.nome == 'Representante Distrital de Rotaract').length > 0);
                
                this.lista.forEach(x => {
                    let cargo = x.cargos.filter(cargo => cargo.nome == 'Representante Distrital de Rotaract')[0];
                    x.anoRotario = cargo.gestaoDe + '~' + cargo.gestaoAte;
                });

                this.lista.sort((a, b) => {
                    if (a.anoRotario < b.anoRotario) return 1;
                    if (a.anoRotario > b.anoRotario) return -1;
                    return 0;
                });
            });
        }

    abrirSocio(socio: SocioResult) {
        
        this.navCtrl.push(DetalheSocioPage, { socio: socio });
    }

}
