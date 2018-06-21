import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';
import { OneSignal } from '@ionic-native/onesignal';

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
import { DetalheAgendaPage } from '../pages/detalhe-agenda/detalhe-agenda';
import { DetalheCargoPage } from '../pages/detalhe-cargo/detalhe-cargo';
import { DetalheSocioPage } from '../pages/detalhe-socio/detalhe-socio';
import { DetalheProjetoPage } from '../pages/detalhe-projeto/detalhe-projeto';
import { ListaArquivosPage } from '../pages/lista-arquivos/lista-arquivos';
import { TabDadosClubePage } from '../pages/tab-dados-clube/tab-dados-clube';
import { TabDadosSocioPage } from '../pages/tab-dados-socio/tab-dados-socio';
import { TabListaCargoSocioPage } from '../pages/tab-lista-cargo-socio/tab-lista-cargo-socio';
import { TabListaClubeSocioPage } from '../pages/tab-lista-clube-socio/tab-lista-clube-socio';
import { TabListaProjetoClubePage } from '../pages/tab-lista-projeto-clube/tab-lista-projeto-clube';
import { TabListaSocioClubePage } from '../pages/tab-lista-socio-clube/tab-lista-socio-clube';
import { DetalheSocioIntermediarioPage } from '../pages/detalhe-socio-intermediario/detalhe-socio-intermediario';
import { DetalheClubeIntermediarioPage } from '../pages/detalhe-clube-intermediario/detalhe-clube-intermediario';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventoProvider } from '../providers/evento/evento';
import { ArquivoProvider } from '../providers/arquivo/arquivo';
import { ClubeProvider } from '../providers/clube/clube';
import { DadoEstaticoProvider } from '../providers/dado-estatico/dado-estatico';
import { FaqProvider } from '../providers/faq/faq';
import { SocioProvider } from '../providers/socio/socio';
import { ConsolidadoProvider } from '../providers/consolidado/consolidado';
import { ProjetoProvider } from '../providers/projeto/projeto';

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
        DetalheAgendaPage,
        ListaArquivosPage,
        DetalheSocioPage,
        DetalheProjetoPage,
        TabDadosClubePage,
        TabDadosSocioPage,
        TabListaCargoSocioPage,
        TabListaClubeSocioPage,
        TabListaProjetoClubePage,
        TabListaSocioClubePage,
        DetalheSocioIntermediarioPage,
        DetalheClubeIntermediarioPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        HttpModule,
        IonicImageViewerModule
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
        DetalheAgendaPage,
        ListaArquivosPage,
        DetalheSocioPage,
        DetalheProjetoPage,
        TabDadosClubePage,
        TabDadosSocioPage,
        TabListaCargoSocioPage,
        TabListaClubeSocioPage,
        TabListaProjetoClubePage,
        TabListaSocioClubePage,
        DetalheSocioIntermediarioPage,
        DetalheClubeIntermediarioPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Geolocation,
        OneSignal,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        LaunchNavigator,
        EventoProvider,
        ArquivoProvider,
        ClubeProvider,
        DadoEstaticoProvider,
        FaqProvider,
        SocioProvider,
        ConsolidadoProvider,
        ProjetoProvider
    ]
})
export class AppModule { }
