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
    return this.http.get(this.config.apiUrl + 'api/Evento')
      .map(res => res.json());
  }

  obter(id) {
    return this.http.get(this.config.apiUrl + 'api/Evento/' + id)
      .map(res => res.json());
  }
}
