export class ArquivoResult {
    nome: string;
    categoria: string;
    link: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
