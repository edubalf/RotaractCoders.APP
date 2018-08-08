import { Component, ViewChild } from '@angular/core';
import { Nav, LoadingController, AlertController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListaRdrsPage } from '../pages/lista-rdrs/lista-rdrs';
import { ListaPresidentesPage } from '../pages/lista-presidentes/lista-presidentes';
import { ClubesPage } from '../pages/clubes/clubes';
import { EquipeDistritalPage } from '../pages/equipe-distrital/equipe-distrital';
import { AgendaPage } from '../pages/agenda/agenda';
import { DownloadsPage } from '../pages/downloads/downloads';
import { FaqPage } from '../pages/faq/faq';
import { ListaCargosPage } from '../pages/lista-cargos/lista-cargos';

import 'rxjs/RX';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{ title: string, component: any }>;

    constructor(
        public platform: Platform, 
        public statusBar: StatusBar, 
        public splashScreen: SplashScreen,
        private loadingController: LoadingController,
        private alertController: AlertController) {
        
        this.initializeApp();

        this.pages = [
            { title: 'Distríto 4430', component: HomePage },
            { title: 'Galeria RDRs', component: ListaRdrsPage },
            { title: 'Presidentes', component: ListaPresidentesPage },
            { title: 'Clubes', component: ClubesPage },
            { title: 'Equipe distrital', component: EquipeDistritalPage },
            { title: 'Agenda', component: AgendaPage },
            { title: 'Guia de cargos', component: ListaCargosPage },
            { title: 'Download', component: DownloadsPage },
            { title: 'ABC do Rotaractiano', component: FaqPage }
        ];
    }

    initializeApp() {

        /*
        this.platform.ready().then(() => {
            let funcaoRetorno = (data) => {
                console.log('Notificações: ' + JSON.stringify(data));
             };

             //this.oneSignal.startInit("0f695cbd-451f-4791-94e6-c0e46f1fc5e8",
             //    "607439658518")
             //    .handleNotificationOpened(funcaoRetorno)
             //    .endInit();

            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });*/
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
