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
                'Preparar a ata das reuniões, mostrando as discussões e decisões tomadas contendo os seguintes pontos:<br><br><ul><li><span>Data, horário e local</span></li><li><span>Dirigente presidindo a reunião</span></li><li><span>Membros presentes</span></li><li><span>Aprovação e correção da ata da última reunião</span></li><li><span>Declaração do tesoureiro</span></li><li><span>Resumo dos relatórios apresentados por dirigentes e comissões</span></li><li><span>Resumo da agenda (incluindo itens antigos e novos) e decisões tomadas</span></li><li><span>Avisos</span></li><li><span>Encerramento</span></li></ul>'
            ]
        });

        this.lista.push({
            nome: 'Tesoureiro',
            descricao: 'O tesoureiro trabalha com o secretário para manter registros financeiros precisos, devendo ser uma pessoa responsável e detalhista.<br><br>Ao deixar o cargo no final do ano rotário, o tesoureiro deve fornecer aos associados do clube e ao tesoureiro entrante um relatório final, o qual deve fazer parte dos arquivos permanentes do clube',
            responsabilidades: [
                'Presidir a comissão financeira',
                'Coletar as cotas per capita;',
                'Depositar as cotas per capita e verbas provenientes de eventos de arrecadação de fundos;',
                'Pagar as contas e fazer reembolsos de despesas do clube;',
                'Preparar e gerenciar o orçamento;',
                'Preparar um relatório mensal com os seguintes itens:<br><br><ul><li><span>Verbas do clube disponíveis no início e fim do mês</span></li><li><span>Renda e respectiva fonte (como cotas per capita ou evento de arrecadação de fundos)</span></li><li><span>Fazer pagamentos, indicando o item e o recebedor dos fundos</span></li>',
                'Assegurar que o clube cumpra todas as exigências governamentais referentes a fornecimento de relatórios financeiros.'
            ]
        });

        this.lista.push({
            nome: 'Comissão de Serviços Internos',
            descricao: '',
            responsabilidades: [
                'Desenvolver estratégias para recrutar novos associados e manter atuantes os atuais associados',
                'Divulgar as atividades do clube aos associados e público em geral',
                'Planejar atividades sociais e de networking',
                'Manter arquivo sobre a história do clube, incluindo fotografias e descrições de atividades do clube'
            ]
        });

        this.lista.push({
            nome: 'Comissão de Serviços à Comunidade',
            descricao: '',
            responsabilidades: [
                'Analisar sugestões dos associados para projetos comunitários, assegurando que atendam a necessidades reais e que possam ser realizados com sucesso pelo clube',
                'Planejar o projeto anual comunitário do clube',
                'Liderar, organizar e implementar o projeto comunitário'
            ]
        });

        this.lista.push({
            nome: 'Comissão de Serviços Internacionais',
            descricao: '',
            responsabilidades: [
                'Analisar sugestões dos associados para projetos internacionais, assegurando que atendam a necessidades reais e que possam ser realizados com sucesso pelo clube',
                'Planejar o projeto anual internacional do clube',
                'Liderar, organizar e implementar o projeto internacional',
                'Desenvolver atividades adicionais que promovam a compreensão internacional entre associados e comunidades'
            ]
        });

        this.lista.push({
            nome: 'Comissão de Desenvolvimento Profissional',
            descricao: '',
            responsabilidades: [
                'Pedir aos associados sugestões para atividades de desenvolvimento profissional',
                'Revisar e planejar atividades',
                'Descobrir recursos na comunidade',
                'Liderar, organizar e implementar as atividades'
            ]
        });

        this.lista.push({
            nome: 'Comissão de Finanças',
            descricao: '',
            responsabilidades: [
                'Decidir de que forma o clube irá financiar suas atividades',
                'Esforçar-se para manter as cotas per capita baixas e o clube financeiramente autossuficiente',
                'Coletar cotas do distrito e clube',
                'Conseguir doações monetárias e em espécie de empresas e organizações'
            ]
        });
    }

    abrirDetalhe(cargo: CargoResult) {
        this.navCtrl.push(DetalheCargoPage, { cargo: cargo });
    }
}
