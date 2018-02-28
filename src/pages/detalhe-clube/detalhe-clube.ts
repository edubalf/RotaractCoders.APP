import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClubeResult } from '../../models/results/clube-result';
import { SocioResult } from '../../models/results/socio-result';
import { DetalheSocioPage } from '../detalhe-socio/detalhe-socio';
import { SocioProvider } from '../../providers/socio/socio';

@IonicPage()
@Component({
    selector: 'page-detalhe-clube',
    templateUrl: 'detalhe-clube.html',
})
export class DetalheClubePage {

    clube: ClubeResult;
    socios: SocioResult[];

    constructor(public navCtrl: NavController, public navParams: NavParams, private socioProvider: SocioProvider) {

        this.clube = navParams.get('clube');

        this.socioProvider.listar().then(lista => {
            this.socios = lista;
            this.socios = this.socios.filter(x => x.clube == this.clube.nome);

            this.socios.forEach(x => {
                var cargoClube = x.cargos.filter(cargo => cargo.tipoCargo == "Clube" && cargo.gestaoDe == 18)[0];

                if (cargoClube != null) {
                    x.cargo = cargoClube.nome + ' - ' + cargoClube.gestaoDe + '/' + cargoClube.gestaoAte;
                }
            });
        });
    }

    abrirSocio(socio: SocioResult) {
        
        this.navCtrl.push(DetalheSocioPage, { socio: socio });
    }
}
