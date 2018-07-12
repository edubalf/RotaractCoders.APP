import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, Platform } from 'ionic-angular';
import { AgendaResult } from '../../models/results/agenda-result';
import { EventoProvider } from '../../providers/evento/evento';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-detalhe-agenda',
  templateUrl: 'detalhe-agenda.html',
})
export class DetalheAgendaPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  evento: AgendaResult = new AgendaResult();

  loader = this.loadingController.create({
    content: 'Carregando...',
  });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private eventoProvider: EventoProvider,
    private loadingController: LoadingController,
    private geolocation: Geolocation,
    private platform: Platform) {

      this.loader.present().then(() => {

        let id = navParams.get('id');

        this.eventoProvider.obter(id).subscribe(res => {
          
          console.log(res);
          this.evento = res;
          this.loadMap(this.evento.latitude, this.evento.longitude);

          this.loader.dismiss();
        });
      });
  }

  loadMap(lat, lng){
 
    let latLng = new google.maps.LatLng(lat, lng);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
  }

  abrirRota() {

    this.geolocation.getCurrentPosition().then((resp) => {
      
      console.log('geo://' + resp.coords.latitude + ',' + resp.coords.longitude + '?q=' + this.evento.latitude + ',' + this.evento.longitude + '(' + this.evento.endereco + ')', '_system');
      
      // ios
      if (this.platform.is('ios')) {
        //window.open('maps://?q=' + this.location.name + '&saddr=' + position.coords.latitude + ',' + position.coords.longitude + '&daddr=' + this.location.latitude + ',' + this.location.longitude, '_system');
      };
      // android
      if (this.platform.is('android')) {
        console.log('entrou');
        window.open('geo://' + resp.coords.latitude + ',' + resp.coords.longitude + '?q=' + this.evento.latitude + ',' + this.evento.longitude + '(' + this.evento.endereco + ')', '_system');
      };
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
