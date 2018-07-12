import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../../config';

@Injectable()
export class ArquivoProvider {

  config: Config = new Config();

  constructor(
    public http: Http) { 

    }

  listar() {
    return this.http.get(this.config.apiUrl + 'api/Arquivo')
      .map(res => res.json());
  }
}
