import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ClubeResult } from '../../models/results/clube-result';
import { SocioResult } from '../../models/results/socio-result';
import { ProjetoResult } from '../../models/results/projeto-result';
import { SocioProvider } from '../../providers/socio/socio';
import { ClubeProvider } from '../../providers/clube/clube';
import { ProjetoProvider } from '../../providers/projeto/projeto';
import { DetalheClubePage } from '../detalhe-clube/detalhe-clube';

@Component({
  selector: 'page-detalhe-clube-intermediario',
  templateUrl: 'detalhe-clube-intermediario.html',
})
export class DetalheClubeIntermediarioPage {

  clube: ClubeResult = new ClubeResult();
  sociosAtivos: SocioResult[] = [];
  sociosInativos: SocioResult[] = [];
  projetos: ProjetoResult[] = [];

  dados = {
    clube: this.clube,
    sociosAtivos: this.sociosAtivos,
    sociosInativos: this.sociosInativos,
    projetos: this.projetos
  };

  loader = this.loadingController.create({
    content: 'Carregando...',
  });

  contadorLoad: number = 2;

  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    public navParams: NavParams,
    private socioProvider: SocioProvider,
    private clubeProvider: ClubeProvider,
    private projetoProvider: ProjetoProvider) {

    var codigoClube: string = navParams.get('codigoClube');

    this.loader.present().then(() => {

      this.clubeProvider.obter(codigoClube).subscribe(data => {
        this.clube = data;

        this.dados.clube = this.clube;

        this.socioProvider.listar(codigoClube).subscribe(lista => {
          var socios: SocioResult[] = lista;

          socios.forEach(x => {

            var clubes = x.clubes.filter(clube => clube.nome == this.clube.nome);

            if (clubes.length > 0) {

              clubes.sort(function (a, b) {
                if (a.posse > b.posse) {
                  return -1;
                }
                if (a.posse < b.posse) {
                  return 1;
                }
                return 0;
              });

              if (clubes[0].desligamento.toString().substring(0, 4) == '0001') {
                this.sociosAtivos.push(x);
              } else {
                this.sociosInativos.push(x);
              }

              this.dados.sociosAtivos = this.sociosAtivos;
              this.dados.sociosInativos = this.sociosInativos;
            }
          });

          this.contadorLoad--;

          if (this.contadorLoad == 0) {
            this.loader.dismiss();

            this.navCtrl.push(DetalheClubePage, this.dados);
            this.navCtrl.remove(this.navCtrl.length() - 1, 1);
          }

        }, err => this.loader.dismiss());
      }, err => this.loader.dismiss());

      this.projetoProvider.listar(codigoClube).subscribe(lista => {
        this.projetos = lista;
        this.dados.projetos = this.projetos;

        this.contadorLoad--;

        if (this.contadorLoad == 0) {
          this.loader.dismiss();

          this.navCtrl.push(DetalheClubePage, this.dados);
          this.navCtrl.remove(this.navCtrl.length() - 1, 1);
        }

      }, err => this.loader.dismiss());
    });
  }
}
