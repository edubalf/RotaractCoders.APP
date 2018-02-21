import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Config } from '../../config';

@Injectable()
export class ArquivoProvider {

  config: Config = new Config();

  constructor(
    private storage: Storage,
    public http: Http) { 

    }

  listar() {
    return this.storage.get('arquivo').then(lista => lista);
  }

  atualizar() {
    return this.http.get(this.config.apiUrl + 'api/Arquivo')
      .map(res => {
        this.storage.set('arquivo', res.json());
      });
  }

}
