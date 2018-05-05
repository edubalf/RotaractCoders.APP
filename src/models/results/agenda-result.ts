export class AgendaResult {
    id: string;
    nome: string;
    realizador: string;
    tipoEvento: string;
    programa: string;
    descricao: string;
    endereco: string;
    complemento: string;
    latitude: number;
    longitude: number;
    dataCriacao: Date;
    dataEvento: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
