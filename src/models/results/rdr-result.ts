export class RdrResult {
    foto: string;
    nome: string;
    anoRotario: string;
    clube: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
