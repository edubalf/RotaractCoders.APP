export class Config {
    //apiUrl: string = 'https://apirotaract4430.azurewebsites.net/';
    distrito: string = '4430';
    apiUrl: string = 'http://localhost:60342/';
    gestaoDe: Date = new Date(2018,6,1);
    gestaoAte: Date = new Date(2019,5,30);

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
