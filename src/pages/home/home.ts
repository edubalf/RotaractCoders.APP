import { Component } from '@angular/core';
import { NavController, LoadingController, Platform } from 'ionic-angular';
import { DistritoProvider } from '../../providers/distrito/distrito';
import { ListaSociosPage } from '../lista-socios/lista-socios';
import { ClubesPage } from '../clubes/clubes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  oqueerotaract: string;
  qtdsocio: string;
  qtdclube: string;

  loader = this.loadingController.create({
    content: 'Carregando...',
  });

  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private distritoProvider: DistritoProvider) {

    this.loader.present().then(() => {
      this.distritoProvider.informacoes().subscribe(retorno => {
        
        this.qtdclube = retorno.quantidadeClubes;
        this.qtdsocio = retorno.quantidadeSocios;

        this.loader.dismiss()
      }, err => this.loader.dismiss());
    });
  }

  abrirPaginaSocios() {
    this.navCtrl.push(ListaSociosPage);
  }

  abrirPaginaClubes() {
    this.navCtrl.push(ClubesPage);
  }
}
