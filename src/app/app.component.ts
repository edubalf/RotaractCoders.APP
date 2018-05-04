import { Component, ViewChild } from '@angular/core';
import { Nav, LoadingController, AlertController, Platform, Content } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListaRdrsPage } from '../pages/lista-rdrs/lista-rdrs';
import { LemaRotarioPage } from '../pages/lema-rotario/lema-rotario';
import { ListaPresidentesPage } from '../pages/lista-presidentes/lista-presidentes';
import { ClubesPage } from '../pages/clubes/clubes';
import { EquipeDistritalPage } from '../pages/equipe-distrital/equipe-distrital';
import { AgendaPage } from '../pages/agenda/agenda';
import { DownloadsPage } from '../pages/downloads/downloads';
import { FaqPage } from '../pages/faq/faq';
import { ListaCargosPage } from '../pages/lista-cargos/lista-cargos';

import { ConsolidadoProvider } from '../providers/consolidado/consolidado';

import 'rxjs/RX';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{ title: string, component: any }>;

    presentAlert() {
        let alert = this.alertController.create({
          subTitle: 'Não foi possivel atualizar as informações'
        });

        alert.present();

        setTimeout(function(){ alert.dismiss() }, 2000);        
      }

    constructor(
        public platform: Platform, 
        public statusBar: StatusBar, 
        public splashScreen: SplashScreen,
        private consolidadoProvider: ConsolidadoProvider,
        private loadingController: LoadingController,
        private alertController: AlertController) {
        
        this.initializeApp();

        this.loader.present().then(() => {
            this.consolidadoProvider.atualizar().then(retorno => {
                retorno.subscribe(() => {

                    this.openPage({ title: 'Distríto 443', component: HomePage });
                    this.loader.dismiss();
                }, err => {
                    
                    this.loader.dismiss();
                });
            });    
        });

        this.pages = [
            { title: 'Distríto 4430', component: HomePage },
            { title: 'Galeria RDRs', component: ListaRdrsPage },
            { title: 'Lema rotário', component: LemaRotarioPage },
            { title: 'Presidentes', component: ListaPresidentesPage },
            { title: 'Clubes', component: ClubesPage },
            { title: 'Equipe distrital', component: EquipeDistritalPage },
            { title: 'Agenda', component: AgendaPage },
            { title: 'Guia de cargos', component: ListaCargosPage },
            { title: 'Download', component: DownloadsPage },
            { title: 'F.A.Q.', component: FaqPage }
        ];

    }

    loader = this.loadingController.create({
        content: 'Atualizando os dados...',
      });

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
