export class ProjetoResult {
    
    codigo: string;
    dataUltimaAtualizacao: Date;
    nome: string;
    justificativa: string;
    dataInicio: Date;
    dataFim: Date;
    dataFinalizacao: Date;
    descricao: string;
    fotos: string;
    resultados: string;
    dificuldade: string;
    palavraChave: string;
    licoesAprendidas: string;
    resumo: string;
    codigoClube: string;
    nomeClube: string;
    numeroDistrito: string;
    dataAtualizacao: Date;

    objetivosGerais: string[] = [];
    objetivosEspecificos: string[] = [];
    categoriasPrincipais: string[] = [];
    categoriasSecundarias: string[] = [];
    publicoAlvo: string[] = [];
    meiosDeDivulgacao: string[] = [];
    parcerias: string[] = [];
    participantes: string[] = [];
    
    tarefas: {
        data: Date;
        descricao: string;
    }[] = [];

    lancamentosFinanceiros: {
        data: Date;
        descricao: string;
        valor: number;
    }[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
