export class SocioClubeResult {

    nomeCargo: string;
    nomeSocio: string;
    nomeClube: string;
    codigoSocio: string;
    numeroDistritoClube: string;
    numeroDistritoCargo: string;
    foto: string;
    tipoCargo: string;
    gestaoDe: Date;
    gestaoAte: Date;
    programa: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
