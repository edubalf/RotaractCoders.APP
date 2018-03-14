export class CargoSocioResult {
    nome: string;
    tipoCargo: string;
    gestaoDe: Date;
    gestaoAte: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
