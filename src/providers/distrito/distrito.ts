import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../../config';

@Injectable()
export class DistritoProvider {

  config: Config = new Config();
  
  constructor(
    public http: Http) { }

  informacoes() {
    return this.http.get(this.config.apiUrl + 'api/Distrito/Informacoes/' + this.config.distrito)
      .map(res => res.json());
  }
}
