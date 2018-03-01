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
    
    //this.storage.set('dataUltimaAtualizacao', null);

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
        
        return this.http.get(this.config.apiUrl + 'api/Consolidado/2018-01-01')    
          .map(res => {
            this.storage.set('arquivo', res.json().arquivos);
            this.storage.set('clube', res.json().clubes);
            this.storage.set('dado-estatico', res.json().dadosEstaticos);
            this.storage.set('agenda', res.json().eventos);
            this.storage.set('faq', res.json().faqs);
            this.storage.set('socio', res.json().socios);

            this.storage.set('dataUltimaAtualizacao', res.json().data);
          }).catch(this.handleError);
      }

      return this.http.get(this.config.apiUrl + 'api/Consolidado/' + data)
        .map(res => {
          this.atulizarTabela('arquivo', res.json().arquivos);
          this.atulizarTabela('clube', res.json().clubes);
          this.atulizarTabela('dado-estatico', res.json().dadosEstaticos);
          this.atulizarTabela('agenda', res.json().eventos);
          this.atulizarTabela('faq', res.json().faqs);


          var count = res.json().socios.length;
          console.log('inicio:' + count);

          res.json().socios.forEach(socio => {
            var nome: string = socio.foto.replace(/^.*[\\\/]/, '');
            
            //socio.foto = 'https://img00.deviantart.net/37c6/i/2017/257/d/b/rayquaza_cloning_goo_tf_tg_pt_2_by_avianine-dbndjsi.png';

            this.toDataURL(socio.foto, data => {
              socio.foto = data;
              count--;
              console.log('converteu:' + count);
            });
          });

          
          this.atulizarTabela('socio', res.json().socios);
          
          
          //this.storage.set('dataUltimaAtualizacao', res.json().data);
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

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error);
  }
}
