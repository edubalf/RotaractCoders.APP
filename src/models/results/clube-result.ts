export class ClubeResult {
    nome: string;
    dataFundacao: string;
    presidente: string;
    horarioReuniao: string;
    localReuniao: string;
    email: string;
    instagram: string;
    facebook: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
