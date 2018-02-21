import { CargoSocioResult } from '../results/cargo-socio-result';

export class SocioResult {
    rowKey: string;
    nome: string;
    apelido: string;
    dataNascimento: string;
    email: string;
    facebook: string;
    instagram: string;
    celular: string;
    clube: string;
    foto: string;
    cargos: CargoSocioResult[] = [];

    anoRotario: string;
    cargo: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
