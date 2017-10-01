export class PresidenteResult {
    foto: string;
    nome: string;
    clube: string;
    email: string;
    facebook: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
