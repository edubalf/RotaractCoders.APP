import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { AgendaResult } from '../../models/results/agenda-result';
import { EventoProvider } from '../../providers/evento/evento';
import { DetalheAgendaPage } from '../detalhe-agenda/detalhe-agenda';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})
export class AgendaPage {

  lista: AgendaResult[] = [];

  loader = this.loadingController.create({
    content: 'Carregando...',
  });

  constructor(
    public navCtrl: NavController,
    private loadingController: LoadingController,
    public navParams: NavParams,
    public eventoProvider: EventoProvider) {

      this.loader.present().then(() => {

        this.eventoProvider.listar().subscribe(data => {
          
          this.lista = data;
          console.log(this.lista);
          
          this.loader.dismiss();
        }, err => this.loader.dismiss());
      });
  }

  abrirDetalhe(id) {
    this.navCtrl.push(DetalheAgendaPage, { id: id });
  }
}
