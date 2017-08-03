import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjetoProvider {

  constructor(public http: Http) {

  }

  listar() {
    //return this.http.get("http://localhost:60342/api/projeto/lista?IdDistrito=38B2A4AC-B677-E711-A41A-38B1DBCDC770")
      //.map(res => res.json());
    return [
      {
        "id": "3ab2a4ac-b677-e711-a41a-38b1dbcdc770",
        "nome": "CAMINHADA, CIDADANIA E SAÚDE",
        "descricao": "Organizar a equipe que fará os exames, rotaractianos e médicos especializados, juntar materiais e equipamentos para a realização de tais exames, divulgar através de jornais, panfletos e outros.",
        "categorias": "Comunidade",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "ed131ed4-b877-e711-a41a-38b1dbcdc770",
        "nome": "CASAMENTO ECOLÓGICO",
        "descricao": "* Obter 1 ou mais parceiros e estabelecer regras para troca de mudas por serviços ou produtos vendidos aos clientes e preferencialmente que tenha empresa de assessoria de imprensa para divulgação;",
        "categorias": "Comunidade",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "683b4cec-b877-e711-a41a-38b1dbcdc770",
        "nome": "PAZ, PORQUE NÃO? - UMA PROPOSTA LEGAL",
        "descricao": "Discussão de propostas junto aos interessados sobre como mudar de forma simples, com baixo custo e bem planejado a realidade da violência em vários locais",
        "categorias": "Multidistrital",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "461d56fe-b877-e711-a41a-38b1dbcdc770",
        "nome": "4º CELEBRAÇÃO DA SEMANA MUNDIAL DE ROTARACT E 2º PRÊMIO ANA PAULA DE OLIVEIRA GUIMARÃES",
        "descricao": "Como não era a 1ª vez fizemos uma avaliação dos anos anteriores e as melhorias para a Celebração e para o Prêmio, como melhoria nas regras e nos critério de premiados.",
        "categorias": "Internacionais",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "e8515d04-b977-e711-a41a-38b1dbcdc770",
        "nome": "MOSTRANDO O CAMINHO",
        "descricao": "26/11 - Apresentação da proposta e do cronograma de palestras, com grande participação dos convidados da reunião",
        "categorias": "Desenvolvimento Profissional",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "fc515d04-b977-e711-a41a-38b1dbcdc770",
        "nome": "PAC  -  PLANO DE ADMINISTRAÇÃO DO  CAIXA",
        "descricao": "Apresentação da Proposta Orçamentária da Gestão, contemplando quitar dividas com a Representação Distrital, inclusive pagamento da gestão na modalidade anuidade.",
        "categorias": "Finanças",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "37525d04-b977-e711-a41a-38b1dbcdc770",
        "nome": "ROTARACT INFLAMA",
        "descricao": "Projeto definido após baixe de 2 sócios, para evitar desmotivação e fechamento do Club.",
        "categorias": "Internos",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "2dc99216-b977-e711-a41a-38b1dbcdc770",
        "nome": "ROTA FOLIA",
        "descricao": "29/01 - Recebimento de 4000 preservativos da SES - Secretaria de Estado da Saúde, em agradecimento a convite enviado ao Secretário, ex rotaractiano, Dr. Barradas Barata;",
        "categorias": "Internos",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "ccba28cb-b977-e711-a41a-38b1dbcdc770",
        "nome": "DIA MUNICIPAL DO ROTARACT",
        "descricao": "Planejar e definir objetivos;",
        "categorias": "Multidistrital",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "85dd2ed1-b977-e711-a41a-38b1dbcdc770",
        "nome": "VILA GLOBAL",
        "descricao": "Fazer novos amigos;",
        "categorias": "Internacionais",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "53df3b13-ba77-e711-a41a-38b1dbcdc770",
        "nome": "DIA MUNICIPAL DO ROTARACT",
        "descricao": "APRESENTação DA PROPOSTA AOS MEMBROS DO CLUBE E SUA APROVação POR ELES.",
        "categorias": "Multidistrital",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "8eb015ef-bd77-e711-a41a-38b1dbcdc770",
        "nome": "FESTA TRIDISTRITAL EM COMEMORAÇÃO DOS 43 ANOS DO ROTARACT",
        "descricao": "1. Definição de data e local;",
        "categorias": "Semana Mundial",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "47a98110-c177-e711-a41a-38b1dbcdc770",
        "nome": "ESTAÇÃO CIDADANIA",
        "descricao": "1. Definição da data e local;",
        "categorias": "Imagem Pública",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "396fbce5-c377-e711-a41a-38b1dbcdc770",
        "nome": "Um Novo Clube Para Uma Nova Década",
        "descricao": "Através do redesenho da marca do clube, o Rotaract São Paulo Vila Formosa objetiva motivar os sócios e implementar um programa de imagem pública do clube, bem como instigar novos jovens a conhecerem o programa.",
        "categorias": "Imagem Pública",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "416fbce5-c377-e711-a41a-38b1dbcdc770",
        "nome": "1º Panquecaract",
        "descricao": "O projeto concebido para ser um festival de panquecas, inédito até então, foi o evento central da comemoração do final da Semana Mundial do Rotaract e foi realizado imediatamente após o fim da, já tradicional, sessão solene pelo Dia do Rotaract, na Câmara Municipal de São Paulo, organizada por este clube.",
        "categorias": "Finanças",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "ffe4b3eb-c377-e711-a41a-38b1dbcdc770",
        "nome": "Ação de Inverno - Etapa 1",
        "descricao": "A ONG No Luar da Esperança procurou o Rotaract Club São Paulo Vila Formosa com a proposta de pedir cobertores para doação.",
        "categorias": "Comunidade",
        "clube": "São Paulo Vila Formosa",
        "distrito": "4430"
    },
    {
        "id": "46b2a4ac-b677-e711-a41a-38b1dbcdc770",
        "nome": "ARRECADAÇÃO DE LIVROS E MATERIAIS ESCOLARES",
        "descricao": "Esta foi a terceira edição do projeto. Realizado sempre no início de dezembro, visamos à arrecadação de livros usados durante o ano para redistribuí-los a comunidades menos assistidas. A inclusão dos materiais escolares vem de encontro ao atendimento tanto das necessidades de quem recebe as doações, como também para atender os doadores, que queiram também doar materiais não mais utilizados.",
        "categorias": "Comunidade",
        "clube": "SÃO PAULO - TATUAPÉ",
        "distrito": "4430"
    },
    {
        "id": "dab2a4ac-b677-e711-a41a-38b1dbcdc770",
        "nome": "ALBERGUE SÃO CAMILO (PROVISORIO)",
        "descricao": "Através de doações levantamos todo o material para a reforma dos banheiros do Albergue, para o atendimento de 350 homens lá instalados. A reforma foi feita por usuários do albergue, de forma voluntária, o que permitiu baixar os custos em pelo menos R$ 1.000,00.",
        "categorias": "Comunidade",
        "clube": "SÃO PAULO - TATUAPÉ",
        "distrito": "4430"
    },
    {
        "id": "6a63cfb8-b677-e711-a41a-38b1dbcdc770",
        "nome": "PRESIDÊNCIA ROTATIVA",
        "descricao": "Após a proposta do projeto, feito pelo presidente, e retomando um antigo projeto do presidente 00/01 Claudio Albieri, forma escolhidas reuniões intercaladas até o final da gestão 02/03. Um reunião era presidida pelo presidente, e outra seria presidida por um sócio do clube que tivesse interesse em presidir uma reunião. Na semana que antecedia a reunião, o sócio escolhido deveria entrar em contato com a diretoria, definir pauta de reunião, verificar eventuais pendências, visitar o Rotary padrinho, entre outras eventuais tarefas. Ao final, 8 dos 17 sócios do clube assumiram a presidência temporária do clube.",
        "categorias": "Internos",
        "clube": "SÃO PAULO - TATUAPÉ",
        "distrito": "4430"
    },
    {
        "id": "038b1c8e-b777-e711-a41a-38b1dbcdc770",
        "nome": "DIA FELIZ",
        "descricao": "O primeiro Projeto Dia Feliz foi realizado em uma festa durante o Dia das Crianças em uma asilo com a participação de crianças de um orfanato.",
        "categorias": "Comunidade",
        "clube": "SÃO PAULO - TATUAPÉ",
        "distrito": "4430"
    },
    {
        "id": "44b3a4ac-b677-e711-a41a-38b1dbcdc770",
        "nome": "FESTA DO DIA DAS CRIANÇAS",
        "descricao": "Primeiro vimos que essas casas de crianças aidéticas eram muito necessitadas de carinho e atenção, então resolvemos fazer visitas semanais a elas, e depois surgiu a idéia de fazermos uma festa para elas no dia das Crianças.",
        "categorias": "Desenvolvimento Profissional",
        "clube": "SÃO PAULO - ALTO DA MOOCA",
        "distrito": "4430"
    },
    {
        "id": "c762cfb8-b677-e711-a41a-38b1dbcdc770",
        "nome": "ARSENAL DA ATITUDE POSITIVA",
        "descricao": "O respectivo projeto foi idealizado pelo vice-presidente do Rotaract Club São Paulo - Mooca, em maio de 2002, juntamento com dois professores doutores das faculdades de direito da UNICAPITAL. Juntos e tendo em vista que no Rotaract SP - Mooca haviam cinco advogados e um aluno do 5º ano de direito firmaram convêncio com um enorme albergue, chamado \"Arsenal de Esperança\" (que abriga 1150 pessoas) e com a UNICAPITAL, tendo como fim prestar assistência jurídica gratuita aos albergados e concomintantemente avaliar os estágios da UNICAPITAL e ajudá-los rezolver as questões jurídicas a eles formuladas. O respectivo trabalho teve início efetivo em setembro do ano de 2002, se ampliando nos meses seguintes e sendo prorrogado o convênio com as referidas instituições no mês de novembro de 2002.",
        "categorias": "Desenvolvimento Profissional",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "e162cfb8-b677-e711-a41a-38b1dbcdc770",
        "nome": "NAS VEIAS DA COMUNIDADE",
        "descricao": "O nobre projeto foi idealizado em setembro do ano de 2001 pelo vice-presidente do Rotaract SP-Mooca Alexandros B Xenoktistakis e pelo diretor de serviços internos Fábio Roberto Rodrigues de Vitro. Ressalta-se que logo após a idealização o projeto foi aprovado unanimente pelo Rotaract SP - Mooca e o companheiro Fábio Roberto começou a elaborar as plantas civil, hidráulica e elétrica do respectivo posto de primeiros socorros na favela da Vila Prudente. Em seguida foi realizado um orçamento altamente detalhado do referido projeto. Passou-se então a divulga-lo pretendendo obter parceiros no exterior, devido ao custo e a vontade de intregração e divulgação do trabalho para rotaract clubs de outros países. Então após um contato feito no Intexto 2002 - Rio de Janeiro, entre Alexandros (Mooca) e José (madrid Velésquez) surgiu a idéia de parceria. Então após inúmeros e-mails e relatórios exemplificados sobre o projeto em voga, a tão esperada parceria foi concluída, os espanhóis vieram ao Brasil, verificaram, adoraram, liberaram a verba e o grande projeto de internacionais / comunidade está em andamento e a manuntenção seja contínua. Fato magnífico para os Rotaract Clubs do Brasil.",
        "categorias": "Internacionais",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "c83fdbc4-b677-e711-a41a-38b1dbcdc770",
        "nome": "RABISCANDO O FUTURO",
        "descricao": "INCILAMENTE HOUVE A IDEALIZação INTERNA SEGUIDA DE CONSCIENTIZação DO CLUBE DA ALTA RELVÃNCIA DA ATUação DE TODOS NO GRANDIOSO PROJETO. EM SEGUIDA HOUVE O CONTATO COM A COMUNIDADE, ESPECIALMENTE COM O LÍDER DA MESMA.OFÍCIOS E DIÁLOGOS COM O DIRETOR DA ESCOLA ONDE OCORREU O EVENTO, POIS AS DEPENDÊNCIAS DA ESCOLA FORAM UTILIZADAS PARA QUE A EXECUÇÃO DO EVENTO FOSSE EXTREMAENTE ORGANIZADA.LOGO APÓS INCIOU-SE A BUSCA DE PARCERIAS, CONTATOS COM O RCSP MOOCA E COM O INTERACT SP-MOOCA, DIVULGação ENTRE ROTARACT, INTERACT E ROTARY CLUBS DO DISTRITO E EM SEQUÊNCIA PARA FORA O DISTRITO E ATÉ DO PAÍS. DIVULGação OSTENSIVA NA COMUNIDADE BENEFICIADA E NOS BAIRROS VIZINHOS. FECHAMENTOS DE GRANDES E IMPORTANTES PARCERIAS.AQUISIÇÃO DOS KITS POR MEIO DE VERBA CONSEGUIDA ATRAVÉS DE PARCERIAS E PATROCÍNIOS, PORTANTO O BALANÇO FOI PERFEITO, OU SEJA, O QUE FOI GASTO FOI ARRECADADO POR INTEIRO. NÃO HOUVE DESPESA ALÉM DA RECEITA.FORAM CADASTRADAS 1000 PESSOAS ENTRE CRIANÇAS E ADOLESCENTES NA SEDE DA FAVELA DA VILA PRUDENTE, FRISE-SE UMA DAS MAIORES, DAS MAIS ANTIGAS  DE SÃO PAULO,E MUITO PERIGOSA TAMBÉM. TODO OS SERVIÇOS DE CADASTRAMENTO FORAM REALIZADOS DIRETAMENTE PELO ROTARACT CLUB SÃO PAULO-MOOCA COM APOIO DO INTERACT SP-MOOCA E DO RCSP MOOCA. OCORRERAM REUNIÕES PARA AVERIGUação DO CUMPRIMENTO INTEGRAL DAS METAS MENSAIS E INTEGRação E DISTRIBUIÇÃO DE TAREFAS ENTRE OS SÓCIOS DO CLUBE. FORAM CONFIRMADOS OS VOLUNTÁRIOS E OS ROTARACTIANOS QIUE IRIAM PARTICIPAR NO DIA DO EVENTO, EM SEQUÊNCIA FORAM MONTADOS OS KITS E FOI REALIZADA A ANÁLISE FINAL. POR CONCLUSIVO, OCOOREU NO DIA 29 DE NOVEMBRO A EXECUÇÃO DA ETAPA FINAL DO MEGA PROJETO, DE FORMA SALUTAR, MUITO MAIS QUE MOTIVANTE E COM ESPLÊNDIDOS RESULTADOS PARA O CLUBE, PARA OS PARCEIROS E PARA COMUNIDADE BENEFICIADA PRINCIPALMENTE. DESTACA-SE QUE DESDE JÁ ESTÃO OCORRENDO O RECONEHCIMENTO DAS PESSOAS QUE COLABORARAM EFETIVAMENTE COM ESTE SUPER PROJETO, FRISE-SE QUE COMPORTOU TRÊS ÁREAS, QUAIS SEJAM, COMUNIDADE, PROFISSIONAIS E INTERNOS, MAS QUE TEVE COMO ÁREA PRINCIPAL E DIRETA A DE SERVIÇOS À COMUNIDADE.",
        "categorias": "Desenvolvimento Profissional",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "ee3fdbc4-b677-e711-a41a-38b1dbcdc770",
        "nome": "CARÁTER DE URGÊNCIA",
        "descricao": "MORMENTE, OCORREU O DEFRONTAMENTO COM A REFERIDA CALAMIDADE , ISTO É, O RECEBIMENTO DA NOTÍCIA EVIDENCIANDO A PROPORÇÃO DO INCÊNDIO NA FAVELA DA VILA PRUDENTE. EM SEQUÊNCIA REUNIÃO DE URGENCA COM MEMBROS DO CLUBE PARA CRIação DO PROJETO. POSTERIORMENTE OCORREU O INÍCIO DA DIVULGação, OS CONTATOS COM OS MORADORES DA REDONDEZA, COM ROTARACTIANOS, ROTARIANOS E INTERACTIANOS, BEM COMO COM A SOCIEDADE AMIGOS DA FAVELA DA VILA PRUDENTE. LOGO APÓS INCIARAM-SE AS ARRECADAÇÕES DE ROUPAS, CALÇADOS E ALIMENTOS. ENTÃO SURGIU A IDÉIA DE CONVERSAR COM O LÍDER COMUNITÁRIO E ADENTRAR NA FAVELA E GRAVAR UM VÍDEO PARA REGISTRAR A DESTRUIÇÃO OCORRIDA COM O INCÊNDIO, PARA BUSCAR CONCRETIZAR PARCERIAS EM PROL DA CARENTE COMUNIDADE. EM SEQUÊNCIA FORAM ENTREGUES AOS MORADORES ATINGIDOS PELO FOGO TUDO O QUE FOI ARRECADADO, FOI EFETUADA A FILMAGEM MENCIONADA E SAIMOS COM  PEITO CHEIO DE ALEGRIA E SATISFação E COM A CONSCIÊNCIA DE QUE  ROTARACT REALIZA TRABALHOS BEM ESTRUTURADOS A LONGO PRAZO , MAS TAMBÉM CONSEGUE SER EFICAZ E SUPRIR URGÊNCIAS, ELEVANDO O NOME DO MESMO E BENEFICIANDO DE MANEIRA ÍMPAR A COMUNIDADE.",
        "categorias": "Comunidade",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "3e40dbc4-b677-e711-a41a-38b1dbcdc770",
        "nome": "BINGÃO DO SUPERMOOCA",
        "descricao": "IDEALIZação DO PROJETO - CONTATO COM O CLUBE - DEFINIÇÃO DE METAS - DIVISÃO DE TAREFAS - CONTATOS COM O ROTARAY E INTERACT - DIVULGação DENTRO E FORA DO DISTRITO - ARRECADação DE PRENDAS - CONTATOS PARA PATROCÍNIOS - TRABALHO INTENSO DOS SÓCIOS DO CLUBE - ELABORação DOS FOLDERS - ALUGUEL DO SALÃO - ENSAIO DA BANDA JAMMERS SÓCIOS DO RCT SP-MOOCA - REFORÇO DE DIVULGação - UNIÃO TOTAL DO GRUPO - AVERIGUação FINAL - CONCLUSÃO COM SUCESSO TOTAL E ABSOLUTO E AGRADECIMENTOS A TODOS COLABORADORES EM ALMOÇO NO ROTARY CLUB PADRINHO(RCSP MOOCA) E NA REUNIÃO DO RCT SP-MOOCA!!!",
        "categorias": "Finanças",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "af3dacac-b777-e711-a41a-38b1dbcdc770",
        "nome": "MOOCA MUNDI",
        "descricao": "PARA REALIZação DO CITADO PROJETO FOI NECESSÁRIO ENFATIZAR A GRANDE UNIÃO DOS SÓCIOS IRMÃOS DO CLUBE( JÁ EXISTENTE MAS IMPORTANTE DE SER SEMPRE EVIDENCIADA), DIVISÃO DAS TAREFAS, CRIação DE DESENHOS, ORÇAMENTOS, ESTRUTURação TEÓRICA E PRÁTICA DO PROJETO, FORMULação DE MATERIAIS INFORMATIVOS, DE ALTO CONTEÚDO E PRÁTICOS. CONTATOS COM ROTARACT CLUBS DENTRO E FORA DO BRASIL, SENDO A PARTE INTERNCAIONAL BEM REFORÇADA, INTEGRação DO ROTARY E INTERACT, APROXIMação DAS NOSSAS FAMÍLIAS COM O ROTARACT, VISITAS A DIFERENTES CLUBES, VIAGENS, PALESTRAS EM ROTARY/ ROTARACT E INTERACT CLUBS, PARCERIAS CONCRETAS E PATROCÍNIOS CONSCIENTES E MUITO AMOR REAL A CAUSA ALIADO A BASTANTE COMPROMISSO, OUSADIA E ENERGIA ULTRAPOSITIVA A CCADA DIA!!!!!!!!!",
        "categorias": "Internacionais",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "bdddafdc-b777-e711-a41a-38b1dbcdc770",
        "nome": "UM BOM ATO - UM ÓTIMO ABRIGO",
        "descricao": "Idealização/ aprovação em reunião ordinária.",
        "categorias": "Comunidade",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "3adeafdc-b777-e711-a41a-38b1dbcdc770",
        "nome": "OLDENBURG - CORAÇÕES BRASILEIROS",
        "descricao": "Idealização do Projeto",
        "categorias": "Internacionais",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "4cddaee2-b777-e711-a41a-38b1dbcdc770",
        "nome": "PROJETO TSUNAMI",
        "descricao": "Primeiramente, tomamos conhecimento da tragédia ocorrida através dos noticiários.",
        "categorias": "Internacionais",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "542ca9e8-b777-e711-a41a-38b1dbcdc770",
        "nome": "ENXCHARC 2005",
        "descricao": "Em agosto de 2004 começou a procura por locais apropriados para o evento, até o final de setembro visitamos diversos locais até encontrarmos um que tivesse todos os pré-requisitos.",
        "categorias": "Internacionais",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "c42ca9e8-b777-e711-a41a-38b1dbcdc770",
        "nome": "MOOCARONE",
        "descricao": "Em setembro de 2004 começamos a avaliar os possíveis locais para realização do aniversário de fundação.",
        "categorias": "Internos",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "8a20a0ee-b777-e711-a41a-38b1dbcdc770",
        "nome": "MOOCA MUNDI - A JORNADA CONTINUA",
        "descricao": "Reforço/continuidade do Projet",
        "categorias": "Internacionais",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "c020a0ee-b777-e711-a41a-38b1dbcdc770",
        "nome": "MOOCA ON THE BEACH 2",
        "descricao": "O projeto já é um projeto contínuo no caléndario do clube, sendo esta sua segunda edição. O primeiro passo para sua realização é a definição de um local para os sócios do clube e convidados se hospedarem. Definido o local, elaboramos um cronograma de atividades de integração entre os presentes. Aproveitamos para realizar um reunião ordinária também, pois todos os sócios se encontram presentes no projeto e, como passamos um tempo maior que uma reunião ordinária juntos, as discussões sobre os passos e ações para os próximos projetos se estendem.",
        "categorias": "Internos",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    },
    {
        "id": "f920a0ee-b777-e711-a41a-38b1dbcdc770",
        "nome": "TARDE DA BELEZA",
        "descricao": "Aproveitando o mês da Mulher, promovemos na sede de Rotary Club padrinho, através de divulgação em reunião e emails, bem como agendamento do local, uma tarde de beleza, com a participação de esposas de rotarianos, que receberam uma hidratação facial promovida por um de nossos sócios, atuante nesse ramo de atividade, com produtos importados, dicas de cuidados com a beleza e orientações sobre como manter uma nutrição saudável.",
        "categorias": "Desenvolvimento Profissional",
        "clube": "São Paulo Mooca",
        "distrito": "4430"
    }];
  }

}
