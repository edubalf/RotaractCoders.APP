import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { ClubeResult } from '../../models/results/clube-result';
import { SocioResult } from '../../models/results/socio-result';
import { ProjetoResult } from '../../models/results/projeto-result';

import { SocioProvider } from '../../providers/socio/socio';
import { ClubeProvider } from '../../providers/clube/clube';
import { ProjetoProvider } from '../../providers/projeto/projeto';

import { DetalheSocioPage } from '../detalhe-socio/detalhe-socio';
import { DetalheProjetoPage } from '../detalhe-projeto/detalhe-projeto';
import { TabDadosClubePage } from '../tab-dados-clube/tab-dados-clube';
import { TabListaSocioClubePage } from '../tab-lista-socio-clube/tab-lista-socio-clube';
import { TabListaProjetoClubePage } from '../tab-lista-projeto-clube/tab-lista-projeto-clube';

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

    tabDados = TabDadosClubePage;
    tabSociosAtivos = TabListaSocioClubePage;
    tabSociosInativos = TabListaSocioClubePage;
    tabProjetos = TabListaProjetoClubePage

    dados =
        {
            clube: this.clube,
            sociosAtivos: this.sociosAtivos,
            sociosInativos: this.sociosInativos,
            projetos: this.projetos
        };

    codigoSocio: string;

    constructor(
        public navCtrl: NavController,
        private loadingController: LoadingController,
        public navParams: NavParams) {

        this.dados = navParams.data;
    }
}
