import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { FaqResult } from '../../models/results/faq-result';

@Component({
    selector: 'page-faq',
    templateUrl: 'faq.html'
})
export class FaqPage {

    lista: FaqResult[] = [];

    loader = this.loadingController.create({
        content: 'Carregando...',
    });

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private loadingController: LoadingController) {

            this.loader.present().then(() => {
                
                this.lista.push(
                    {pergunta: "ADIRC", resposta: "É a sigla de Assembleia Distrital de Rotaract Clubs. Evento destinado à capacitação de cargos e líderes para próxima gestão."},
                    {pergunta: "Ano rotário", resposta: "Ano que se inicia no dia 1º de Julho e termina no dia 30 de Junho do ano subseqüente.É o tempo de gestão de um Conselho de Club ou do Rotary International."},
                    {pergunta: "Áreas de Enfoque do Rotary", resposta: "Introdução às seis áreas de enfoque, com exemplos de projetos humanitários em cada uma delas."},
                    {pergunta: "Arquivo Nacional", resposta: "É um programa da OMIR – Brasil (Rotaract Brasil) , que visa promover a divulgação dos projetos já realizados para os clubs de todo o Brasil."},
                    {pergunta: "ASR", resposta: "Associação de Senhoras de Rotarianos, é o mesmo que a Casa da Amizade, onde as esposas dos rotarianos se reúnem e criam eventos beneficentes."},
                    {pergunta: "ASFAR", resposta: "Associação de Família de Rotarianos"},
                    {pergunta: "Brand Center", resposta: "Personalize e baixe o logotipo do seu Rotaract Club, materiais promocionais e muito mais. É necessário login no My Rotary."},
                    {pergunta: "Caixa Distrital", resposta: "Todos os clubes mandam uma contribuição por cada sócio do Club, ou por outro motivo qualquer, que é utilizada para cobrir gastos do distrito."},
                    {pergunta: "Casa da Amizade", resposta: "É o mesmo que a ASR – Associação de Senhoras de Rotarianos."},
                    {pergunta: "CLARO", resposta: "É a sigla para a Conferência Latino-Americana de Rotaract Clubs."},
                    {pergunta: "Clube Padrinho", resposta: "É o clube que deu incentivo, coordenou e ajudou na fundação de outro clube."},
                    {pergunta: "Clube Patrocinador", resposta: "É o Rotary Club que patrocina a fundação de um Rotaract Club. O Rotary Patrocinador está sempre prestando auxílio ás necessidades dos Rotaracts Clubs."},
                    {pergunta: "Comissão", resposta: "É um grupo de sócios que trabalham especificamente para um objetivo dentro do Club ou do Distrito."},
                    {pergunta: "Companheiro", resposta: "É o termo utilizado para dirigir-se a algum sócio do Club. Em todos os clubes do mundo, os sócios se tratam como companheiros."},
                    {pergunta: "Companheiro Paul Harris", resposta: "É uma pessoa que foi condecorada com um título Paul Harris."},
                    {pergunta: "CODIRC", resposta: "É a sigla da Conferência Distrital de Rotaract. Principal evento rotaractiano de um distrito, onde ocorre os concursos de projetos e oratória. "},
                    {pergunta: "CONARC", resposta: "É a sigla de Conferência Nacional de Rotaract. O mais importante evento rotaractiano do Brasil, reunindo todo o país. É organizado pela OMIR Brasil (Rotaract Brasil). Tem como finalidade confraternizar com os companheiros e premiação de projetos, além de palestras."},
                    {pergunta: "Conferência Distrital", resposta: "É uma reunião de sósios de todos os clubes do distrito, onde são conferidos os projetos e eventos durante a gestão. Normalmente, acontece em junho ou julho. Nas conferências distritais do Rotary, normalmente o último dia é dedicado aos jovens do Interact e Rotaract, quando acontecem palestras e eventos relacionados aos jovens. "},
                    {pergunta: "Conselho Diretor", resposta: "É o grupo de dirigentes de um club, a maioria das decisões dos mesmos é tomada pelos mesmos."},
                    {pergunta: "Conselho Distrital", resposta: "É o grupo de dirigentes que coordena um determinado distrito. Eles são eleitos por todos os clubs e representação o distrito perante o Rotary International."},
                    {pergunta: "Dirigentes", resposta: "É o grupo de pessoas que estão em determinados cargos dentro do club e tem a função de dirigi-lo e coordená-lo da melhor forma possível."},
                    {pergunta: "Distintivo", resposta: "É uma peça que serve para identificar o sócio ou um cargo dentro do club ou do distrito. Ele é usado na lapela da camisa e reforça o convívio dos sócios."},
                    {pergunta: "Distrito", resposta: "Área geográfica que engloba cidades e clubs, é uma divisão utilizada para melhor ser a atuação do Rotary International sobre os clubs. Cada distrito conta com um governador."},
                    {pergunta: "Encontro Rotaract Pré-Convenção", resposta: "Evento oficial internacional destinada a Rotaract. Ocorre antes do início da Convenção Internacional de Rotary, sempre na mesma cidade sede da Convenção e instalações."},
                    {pergunta: "ENDIRC", resposta: "Sigla para Encontro Distrital de Rotaract Clubs. Encontro destinado exclusivamente à confraternização dos associados do Distrito."},
                    {pergunta: "ENPARC", resposta: "Sigla para Encontro Paulista de Rotaract Clubs. Encontro destinado exclusivamente à confraternização dos distritos de São Paulo."},
                    {pergunta: "Estatutos", resposta: "São diretrizes prescritas pelo Rotary International para o Programa Rotaract."},
                    {pergunta: "Fundação Rotária", resposta: "É um fundo de doações para o Rotary, com a finalidade de espalhar o bem em todo o mundo, através da caridade, da educação e de várias outras maneiras."},
                    {pergunta: "Governador", resposta: "É a pessoa eleita para coordenar todas as ações e todo o desenvolvimento dos clubs de um distrito. Eles prestam contas ao Rotary International de tudo o que ocorre em seu distrito. Uma pessoa nunca perde o titulo de governador, isto é, uma vez governador, ele será sempre tratado como governador."},
                    {pergunta: "Interact Club", resposta: "É um clube de serviços para jovens de 14 a 18 anos que tem como o objetivo trabalhar pelo bem da comunidade e prestar serviços aos necessitados."},
                    {pergunta: "INTEROTA", resposta: "Sigla para Encontro Internacional de Rotaract Clubs."},
                    {pergunta: "Lema rotário", resposta: "É o lema ou pensamento adotado todo ano por um presidente de Rotary International."},
                    {pergunta: "My Rotary", resposta: "Site principal do Rotary Internacional para associados (necessário cadastro)."},
                    {pergunta: "OMIR Brasil (Rotaract Brasil)", resposta: "Organização Multidistrital de Informação de Rotaract. No Brasil, foi criada em 1991 para aumentar o intercâmbio de informações entre os Rotaracts Clubs."},
                    {pergunta: "Official Directory", resposta: "É um CD lançado anualmente que trazem informações sobre todos os Clubs do mundo."},
                    {pergunta: "Paul Harris", resposta: "Fundador do Rotary International."},
                    {pergunta: "Pólio Plus", resposta: "Programa da Fundação Rotária que tem como objetivo erradicar a Poliomelite do mundo. Foi implantado em 1983 com a esperança de concluir seus trabalhos no ano de 2005."},
                    {pergunta: "Presidente do Rotary International", resposta: "É o cargo máximo do Rotary International que coordena todos os programas em nível mundial. Ele preside o Conselho Mundial de RI."},
                    {pergunta: "Quota", resposta: "É a quantia paga todo mês ou todo bimestre no Club. Este dinheiro vai para o caixa do Club e serve para cobrir gastos e realizar eventos e projetos."},
                    {pergunta: "RDR", resposta: "Representante Distrital de Rotaract é a autoridade máxima no Rotaract de um distrito. É ele quem coordena todas as ações do distrito durante o período de um ano rotário."},
                    {pergunta: "Regimento Interno", resposta: "Diretrizes definidas pelo Rotaract Club para que se possa melhor organizar e dirigir o Club. O Regimento Interno deve ser autorizado pelo Club Patrocinador."},
                    {pergunta: "REPRESE", resposta: "Reunião de Presidentes e Secretários, que ocorre mensalmente para resolver as questões burocráticas do distrito."},
                    {pergunta: "Rotakids", resposta: "Clube de serviços que agrupa crianças de até 14 anos, no intuito de fazer o bem através de ações simples, porém significativas junto com seus Rotarys Clubs Patrocinadores."},
                    {pergunta: "Rotary Club", resposta: "Clube de serviços para pessoas acima de 30 anos ou profissionais liberais. Tem o objetivo de promover o bem para a comunidade."},
                    {pergunta: "Rotary Ideas", resposta: "Encontre ideias de serviços, solicite contribuições, ache voluntários, materiais ou parceiros para seus projetos. Localizado no site do My Rotary."},
                    {pergunta: "Rotary International", resposta: "Organização Internacional fundada em 1905 por Paul Harris. Seu objetivo é coordenar todos os Rotarys Clubs do mundo."},
                    {pergunta: "Rotary Showcase", resposta: "Seja inspirado por projetos humanitários concluídos e publique o seu para que todos o conheçam. Localizado no site do My Rotary."},
                    {pergunta: "RYLA", resposta: "Rotary Youth Leadership Awards, programa de liderança para jovens, que é patrocinado por um Rotary Club."},
                    {pergunta: "TLM", resposta: "É a Treinamento de Líderes Multiplicadores, treinamento este de dirigente de Rotaract Clubs. Presidentes atuais e eleitos participam juntamente com a Equipe Distrital atual e eleita."}
                );

                this.loader.dismiss();
            });
    }
}
