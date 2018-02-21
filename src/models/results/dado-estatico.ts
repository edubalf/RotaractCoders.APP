export class DadoEstaticoResult {
    nome: string;
    descricao: string;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
