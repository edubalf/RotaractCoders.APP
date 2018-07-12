import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../../config';

@Injectable()
export class FaqProvider {

  config: Config = new Config();
  
  constructor(
    public http: Http) {}

  listar() {
    return this.http.get(this.config.apiUrl + 'api/Faq')
      .map(res => res.json());
  }
}
