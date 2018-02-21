import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { SocioResult } from '../../models/results/socio-result';
import { Config } from '../../config';

@Injectable()
export class SocioProvider {

  config: Config = new Config();
  
  constructor(
    private storage: Storage,
    public http: Http) {}

  listar() {
    return this.storage.get('socio').then(lista => lista);
  }

  atualizar() {
    return this.http.get(this.config.apiUrl + 'api/Socio')
      .map(res => {

        let lista: any = res.json();
        
        //lista.forEach(element => {
          //element.foto = this.readThis(element.foto);
        //});

        this.storage.set('socio', lista);
      });
  }

  private readThis(inputValue: any): string {
    
    var retorno: string;
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
  
    myReader.onloadend = (e) => {
      retorno = myReader.result;
    }
    myReader.readAsDataURL(file);
    return retorno;
  }
}
