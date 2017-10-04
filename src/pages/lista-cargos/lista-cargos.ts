import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CargoResult } from '../../models/results/cargo-result';

import { DetalheCargoPage } from '../detalhe-cargo/detalhe-cargo';

@IonicPage()
@Component({
    selector: 'page-lista-cargos',
    templateUrl: 'lista-cargos.html',
})
export class ListaCargosPage {

    lista: CargoResult[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.lista.push({
            nome: 'Presidente',
            descricao: 'O principal papel do presidente é assegurar que as atividades de desenvolvimento profissional e capacitação do clube sejam bem- sucedidas e que seus projetos beneficiem a comunidade.',
            responsabilidades: [
                'Realizar reuniões eficientes com agenda detalhada que inclua tempo suficiente para apresentação de relatórios de dirigentes e membros de comissão;',
                'Presidir reuniões do conselho diretor;',
                'Indicar todas as comissões permanentes e especiais, com aprovação do conselho diretor, e servir como membro ex- officio em todas elas;',
                'Indicar os presidentes das comissões com base em experiências individuais, e pedir sugestões para membros das respectivas comissões;',
                'Delegar responsabilidades para ajudar os rotaractianos a desenvolverem suas habilidades de liderança e assumirem futuras posições no clube;',
                'Incentivar associados do clube a se envolverem em projetos relacionados a suas habilidades e interesses;',
                'Assegurar que atividades e projetos do clube sejam promovidos e executados com sucesso;',
                'Monitorar o quadro associativo para garantir que haja diversidade de idade e sexo;',
                'Comunicar-se e colaborar com o conselheiro rotariano, associados do Rotary Club patrocinador e administradores distritais de Rotaract, sendo que em clubes sediados em universidade, o presidente deste deve se comunicar com o orientador da área educacional;',
                'Atualizar as informações do clube e dados do quadro associativo semestralmente através do Portal do Associado.'
            ]
        });

        this.lista.push({
            nome: 'Vice-presidente',
            descricao: 'O principal papel do vice-presidente é apoiar o presidente do clube. Alguns clubes pedem para o presidente entrante servir como vice-presidente.',
            responsabilidades: [
                'Presidir reuniões quando o presidente estiver ausente;',
                'Integrar o conselho diretor e servir como membro ex-officio em todas as comissões;',
                'Desempenhar funções especiais designadas pelo presidente;',
                'Estar ciente das metas e atividades do clube;',
                'Assumir a presidência do clube caso o cargo fique vago'
            ]
        });

        this.lista.push({
            nome: 'Secretário',
            descricao: 'A principal responsabilidade do secretário é ajudar o clube a operar com eficiência. O secretário deve ser bem organizado e saber se comunicar bem.',
            responsabilidades: [
                'Registrar e guardar todas as informações pertinentes ao clube, incluindo dados do quadro associativo, indicação de membros de comissão, comparecimento a reuniões, pagamento de cotas, além de documentos importantes como certificado de fundação, orçamentos e relatórios do clube;',
                'Notificar o Rotary Club patrocinador a respeito de rotaractianos que estão completando 30 anos de idade que podem ser rotarianos em potencial;',
                'Fornecer ao presidente informações sobre o clube e associados para que este possa manter o RI atualizado;',
                'Preparar a ata das reuniões, mostrando as discussões e decisões tomadas contendo os seguintes pontos:<ul><li>Data, horário e local</li><li>Dirigente presidindo a reunião</li><li>Membros presentes</li><li>Aprovação e correção da ata da última reunião</li><li>Declaração do tesoureiro</li><li>Resumo dos relatórios apresentados por dirigentes e comissões</li><li>Resumo da agenda (incluindo itens antigos e novos) e decisões tomadas</li><li>Avisos</li><li>Encerramento</li></ul>'
            ]
        });
    }

    abrirDetalhe(cargo: CargoResult) {
        this.navCtrl.push(DetalheCargoPage, { cargo: cargo });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListaCargosPage');
    }

}
