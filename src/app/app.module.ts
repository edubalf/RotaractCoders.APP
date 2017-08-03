import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProjetosPage } from '../pages/projetos/projetos';
import { ClubesPage } from '../pages/clubes/clubes';
import { ProjetoDetalhesPage } from '../pages/projeto-detalhes/projeto-detalhes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProjetoProvider } from '../providers/projeto/projeto';
import { ClubeProvider } from '../providers/clube/clube';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProjetosPage,
    ClubesPage,
    ProjetoDetalhesPage
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
    ProjetosPage,
    ClubesPage,
    ProjetoDetalhesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProjetoProvider,
    ClubeProvider
  ]
})
export class AppModule {}
