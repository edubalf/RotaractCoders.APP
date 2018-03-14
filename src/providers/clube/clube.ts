import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Config } from '../../config';

@Injectable()
export class ClubeProvider {

  config: Config = new Config();

  constructor(
    private storage: Storage,
    public http: Http) { }

  listar() {
    return this.http.get(this.config.apiUrl + 'api/Clube/' + this.config.distrito)
      .map(res => res.json());
  }

  obter(codigoClube: string) {
    return this.http.get(this.config.apiUrl + 'api/Clube/Obter/' + codigoClube)
      .map(res => res.json());
  }
}
