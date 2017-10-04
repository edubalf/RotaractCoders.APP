export class FaqResult {
    pergunta: string;
    resposta: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
