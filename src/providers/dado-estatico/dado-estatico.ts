import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DadoEstaticoResult } from '../../models/results/dado-estatico';
import { Storage } from '@ionic/storage';
import { Config } from '../../config';

@Injectable()
export class DadoEstaticoProvider {
  
  config: Config = new Config();

  constructor(
    private storage: Storage,
    public http: Http) {}

  buscar(nome) {

    return this.storage.get('dado-estatico').then(lista => {
      console.log(lista);
      return lista.filter(x => x.nome == nome)[0] ;
    });
  }

  atualizar() {
    return this.http.get(this.config.apiUrl + 'api/DadoEstatico')
      .map(res => {
        this.storage.set('dado-estatico', res.json());
      });
  }
}
