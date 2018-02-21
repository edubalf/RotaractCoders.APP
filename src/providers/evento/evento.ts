import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AgendaResult } from '../../models/results/agenda-result';
import { Storage } from '@ionic/storage';
import { Config } from '../../config';

@Injectable()
export class EventoProvider {

  config: Config = new Config();
  
  constructor(
    private storage: Storage,
    public http: Http) { }

  listar() {
    return this.storage.get('agenda').then(lista => lista);
  }

  atualizar() {
    return this.http.get(this.config.apiUrl + 'api/Evento')
      .map(res => {
        this.storage.set('agenda', res.json());
      });
  }
}
