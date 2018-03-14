import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClubeResult } from '../../models/results/clube-result';
import { SocioResult } from '../../models/results/socio-result';
import { ProjetoResult } from '../../models/results/projeto-result';

import { SocioProvider } from '../../providers/socio/socio';
import { ClubeProvider } from '../../providers/clube/clube';
import { ProjetoProvider } from '../../providers/projeto/projeto';

import { DetalheSocioPage } from '../detalhe-socio/detalhe-socio';
import { DetalheProjetoPage } from '../detalhe-projeto/detalhe-projeto';

@IonicPage()
@Component({
    selector: 'page-detalhe-clube',
    templateUrl: 'detalhe-clube.html',
    providers: [
        SocioProvider,
        ClubeProvider,
        ProjetoProvider
    ]
})
export class DetalheClubePage {

    clube: ClubeResult = new ClubeResult();
    sociosAtivos: SocioResult[] = [];
    sociosInativos: SocioResult[] = [];
    projetos: ProjetoResult[] = [];

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams, 
        private socioProvider: SocioProvider,
        private clubeProvider: ClubeProvider,
        private projetoProvider: ProjetoProvider) {

            var codigoClube: string = navParams.get('codigoClube');

            this.clubeProvider.obter(codigoClube).subscribe(data => {
                this.clube = data;

                console.log(this.clube);

                this.socioProvider.listar(codigoClube).subscribe(lista => {
                    var socios: SocioResult[] = lista;
    
                    console.log(socios);

                    socios.forEach(x => {
    
                        var clubes = x.clubes.filter(clube => clube.nome == this.clube.nome);
    
                        if (clubes.length > 0) {
    
                            clubes.sort(function(a, b) {
                                if (a.posse > b.posse) {
                                    return -1;
                                }
                                if (a.posse < b.posse) {
                                    return 1;
                                }
                                return 0;
                            });
    
                            console.log(clubes[0].desligamento);

                            if (clubes[0].desligamento.toString().substring(0,4) == '0001') {
                                this.sociosAtivos.push(x);
                            } else {
                                this.sociosInativos.push(x);
                            }
                        } 
                    })
                });
            });

            this.projetoProvider.listar(codigoClube).subscribe(lista => {
                this.projetos = lista;
            });
    }

    abrirSocio(socio: SocioResult) {
        
        this.navCtrl.push(DetalheSocioPage, 
        { 
            codigoSocio: socio.codigoSocio, 
            codigoClube: socio.codigoClube
        });
    }

    abrirProjeto(codigoProjeto: string) {

        this.navCtrl.push(DetalheProjetoPage, {
            codigoProjeto: codigoProjeto
        });
    }
}
