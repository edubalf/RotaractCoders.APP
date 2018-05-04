import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/RX';
import { Storage } from '@ionic/storage';
import { Config } from '../../config';
import { ClubeResult } from '../../models/results/clube-result';
import { ClickBlock } from 'ionic-angular/components/app/click-block';
import { timer } from 'rxjs/observable/timer';

@Injectable()
export class ConsolidadoProvider {

  config: Config = new Config();

  constructor(
    private storage: Storage,
    public http: Http) { }

  atualizar() {
    
    return this.storage.get('dataUltimaAtualizacao').then(retorno => {
     
      var data: Date;

      console.log(retorno);

      if (retorno == null) {
        data = new Date(2018,1,1);
      } else {
        data = new Date(retorno);
      }

      return this.http.get(this.config.apiUrl + 'api/Consolidado/' + data.getFullYear() + '-' + data.getMonth() + '-' + data.getDay())
        .map(res => {
          
          if (retorno == null) {

            this.storage.set('arquivo', res.json().arquivos);
            this.storage.set('dado-estatico', res.json().dadosEstaticos);
            this.storage.set('agenda', res.json().eventos);
            this.storage.set('faq', res.json().faqs);

          } else {

            this.atulizarTabela('arquivo', res.json().arquivos);
            this.atulizarTabela('dado-estatico', res.json().dadosEstaticos);
            this.atulizarTabela('agenda', res.json().eventos);
            this.atulizarTabela('faq', res.json().faqs);
            
          }
          
          this.storage.set('dataUltimaAtualizacao', res.json().data);
        }).catch(this.handleError);
    });
  }

  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  private atulizarTabela(nomeTabela: string, dadosNovos: any){
    
    if (dadosNovos == null) return;

    return this.storage.get(nomeTabela).then(lista => {
      
      var dadosSalvos: any = new Array();

      if (lista != null) {
        dadosSalvos = lista;
      }


      dadosNovos.forEach(dado => {
        if (dado.bitAtivo == false) {

          if (dadosSalvos != null && dadosSalvos.findIndex(clube => clube.rowKey == dado.rowKey) >= 0) {
            dadosSalvos = dadosSalvos.filter(clube => clube.rowKey != dado.rowKey);
          }
        } else if (dadosSalvos != null && dadosSalvos.findIndex(clube => clube.rowKey == dado.rowKey) >= 0) {
          dadosSalvos[dadosSalvos.findIndex(clube => clube.rowKey == dado.rowKey)] = dado;
        } else {
          dadosSalvos.push(dado);
        }
      });

      this.storage.set(nomeTabela, dadosSalvos);
    });
  }

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error);
  }
}
