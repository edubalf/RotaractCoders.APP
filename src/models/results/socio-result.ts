
export class SocioResult {

    codigoSocio: string;
    nome: string;
    apelido: string;
    dataNascimento: Date;
    email: string;
    facebook: string;
    instagram: string;
    celular: string;
    codigoClube: string;
    foto: string;
    dataAtualizacao: Date;
    bitAtivo: boolean;
    nomeClubeAtual: string;

    //Uso interno
    cargoAtual:string;

    cargos: {
        nome: string;
        tipoCargo: string;
        gestaoDe: Date;
        gestaoAte: Date;
    }[] = [];
    
    clubes: {
        numeroDistrito: string;
        nome: string;
        posse: Date;
        desligamento: Date;
    }[] = [];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
