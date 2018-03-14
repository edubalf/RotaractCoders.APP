export class CargoResult {
    nome: string;
    descricao: string;
    responsabilidades: string[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}