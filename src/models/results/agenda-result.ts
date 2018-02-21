export class AgendaResult {
    id: string;
    nome: string;
    realizador: string;
    tipoEvento: string;
    programa: string;
    descricao: string;
    dataCriacao: Date;
    dataEvento: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
