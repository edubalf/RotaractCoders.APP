export class EquipeResult {
    foto: string;
    nome: string;
    cargo: string;
    clube: string;
    email: string;
    facebook: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
