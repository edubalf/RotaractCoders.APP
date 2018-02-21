import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadoEstaticoProvider } from '../../providers/dado-estatico/dado-estatico';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    DadoEstaticoProvider
  ]
})
export class HomePage {

  oqueerotaract: string;
  qtdsocio: string;
  qtdclube: string;

  constructor(
    public navCtrl: NavController,
    private dadoEstaticoProvider: DadoEstaticoProvider) {

      this.dadoEstaticoProvider.buscar("oqueerotaract").then(retorno => {
        this.oqueerotaract = retorno.descricao;
      });

      this.dadoEstaticoProvider.buscar("numeroSocios").then(retorno => {
        this.qtdsocio = retorno.descricao;
      });

      this.dadoEstaticoProvider.buscar("numeroClubes").then(retorno => {
        this.qtdclube = retorno.descricao;
      });
  }
}
