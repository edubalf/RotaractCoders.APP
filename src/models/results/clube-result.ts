export class ClubeResult {
    rowKey: string;
    nome: string;
    dataFundacao: string;
    presidente: string;
    horarioReuniao: string;
    localReuniao: string;
    email: string;
    instagram: string;
    facebook: string;
    site: string;
    rotaryPadrinho: string;
    numeroDistrito: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
