import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
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
import { DetalheClubePage } from '../pages/detalhe-clube/detalhe-clube';
import { DetalheCargoPage } from '../pages/detalhe-cargo/detalhe-cargo';
import { ListaArquivosPage } from '../pages/lista-arquivos/lista-arquivos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LemaRotarioPage,
        ListaPresidentesPage,
        ClubesPage,
        EquipeDistritalPage,
        AgendaPage,
        DownloadsPage,
        FaqPage,
        ListaCargosPage,
        ListaRdrsPage,
        DetalheClubePage,
        DetalheCargoPage,
        ListaArquivosPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LemaRotarioPage,
        ListaPresidentesPage,
        ClubesPage,
        EquipeDistritalPage,
        AgendaPage,
        DownloadsPage,
        FaqPage,
        ListaCargosPage,
        ListaRdrsPage,
        DetalheClubePage,
        DetalheCargoPage,
        ListaArquivosPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
