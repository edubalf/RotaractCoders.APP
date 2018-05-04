import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SocioResult } from '../../models/results/socio-result';
import { Config } from '../../config';

@Injectable()
export class SocioProvider {

  config: Config = new Config();
  
  constructor(public http: Http) {}

  listar(codigoClube: string) {
    return this.http.get(this.config.apiUrl + 'api/Socio/' + codigoClube)
      .map(res => res.json());
  }

  listarRdrs() {
    return this.http.get(this.config.apiUrl + 'api/Socio/ListarRdrs/' + this.config.distrito)
      .map(res => res.json());
  }

  listarEquipeDistrital(gestaoDe: Date, gestaoAte: Date) {
    
    console.log(this.config.apiUrl + 'api/Socio/ListarEquipeDistrital/' + this.formatDate(gestaoDe) + '/' + this.formatDate(gestaoAte) + '/' + this.config.distrito);
    return this.http.get(this.config.apiUrl + 'api/Socio/ListarEquipeDistrital/' + this.formatDate(gestaoDe) + '/' + this.formatDate(gestaoAte) + '/' + this.config.distrito)
      .map(res => res.json());
  }

  listarPresidentes(gestaoDe: Date, gestaoAte: Date) {
    return this.http.get(this.config.apiUrl + 'api/Socio/ListarPresidentes/' + this.formatDate(gestaoDe) + '/' + this.formatDate(gestaoAte) + '/' + this.config.distrito)
      .map(res => res.json());
  }

  obterPorCodigoSocio(codigoSocio: string) {
    return this.http.get(this.config.apiUrl + 'api/Socio/obter/' + codigoSocio)
      .map(res => res.json());
  }

  obter(codigoClube: string, codigoSocio: string) {
    return this.http.get(this.config.apiUrl + 'api/Socio/obter/' + codigoSocio + '/' + codigoClube)
      .map(res => res.json());
  }

  private formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
}
