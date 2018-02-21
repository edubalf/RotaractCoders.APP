import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Config } from '../../config';
import { ClubeResult } from '../../models/results/clube-result';
import { ClickBlock } from 'ionic-angular/components/app/click-block';

@Injectable()
export class ConsolidadoProvider {

  config: Config = new Config();

  constructor(
    private storage: Storage,
    public http: Http) { }

  atualizar() {
    
    this.storage.set('dataUltimaAtualizacao', null);

    return this.storage.get('dataUltimaAtualizacao').then(data => {

      /*
      this.storage.set('arquivo', null);
      this.storage.set('clube', null);
      this.storage.set('dado-estatico', null);
      this.storage.set('agenda', null);
      this.storage.set('faq', null);
      this.storage.set('socio', null);
      */

      if (data == null) {
        console.log('entrou');
        return this.http.get(this.config.apiUrl + 'api/Consolidado/2018-01-01')
          .map(res => {
            this.storage.set('arquivo', res.json().arquivos);
            this.storage.set('clube', res.json().clubes);
            this.storage.set('dado-estatico', res.json().dadosEstaticos);
            this.storage.set('agenda', res.json().eventos);
            this.storage.set('faq', res.json().faqs);
            this.storage.set('socio', res.json().socios);

            this.storage.set('dataUltimaAtualizacao', res.json().data);
          });
      }

      return this.http.get(this.config.apiUrl + 'api/Consolidado/' + data)
        .map(res => {
          this.atulizarTabela('arquivo', res.json().arquivos);
          this.atulizarTabela('clube', res.json().clubes);
          this.atulizarTabela('dado-estatico', res.json().dadosEstaticos);
          this.atulizarTabela('agenda', res.json().eventos);
          this.atulizarTabela('faq', res.json().faqs);
          this.atulizarTabela('socio', res.json().socios);
        });
    });
  }

  private atulizarTabela(nomeTabela: string, dadosNovos: any){
    
    return this.storage.get(nomeTabela).then(lista => {
      
      var dadosSalvos: any = lista;
      
      dadosNovos.forEach(dado => {
        if (dado.bitAtivo == false) {

          if (dadosSalvos.findIndex(clube => clube.rowKey == dado.rowKey) >= 0) {
            dadosSalvos = dadosSalvos.filter(clube => clube.rowKey != dado.rowKey);
          }
        } else if (dadosSalvos.findIndex(clube => clube.rowKey == dado.rowKey) >= 0) {
          dadosSalvos[dadosSalvos.findIndex(clube => clube.rowKey == dado.rowKey)] = dado;
        } else {
          dadosSalvos.push(dado);
        }
      });

      this.storage.set(nomeTabela, dadosSalvos);
    });
  }
}
