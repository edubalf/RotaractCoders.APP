export class CargoSocioResult {
    nome: string;
    tipoCargo: string;
    gestaoDe: number;
    gestaoAte: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
