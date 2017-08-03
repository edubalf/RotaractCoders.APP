export class ListaProjetoResult {
    id: string;
    nome:string;
    descricao:string;
    categorias:string;
    clube:string;
    distrito:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
