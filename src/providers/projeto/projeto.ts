import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Config } from '../../config';

@Injectable()
export class ProjetoProvider {

  config: Config = new Config();

  constructor(
    private storage: Storage,
    public http: Http) { }

  listar(CodigoClube: string) {
    return this.http.get(this.config.apiUrl + 'api/Projeto/' + CodigoClube)
      .map(res => res.json());
  }

  obter(codigoProjeto: string) {
    return this.http.get(this.config.apiUrl + 'api/Projeto/Obter/' + codigoProjeto)
      .map(res => res.json());
  }

}
