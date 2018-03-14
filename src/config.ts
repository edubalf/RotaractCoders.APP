export class Config {
    //apiUrl: string = 'https://rotaract4430api.azurewebsites.net/';
    distrito: string = '4430';
    apiUrl: string = 'http://localhost:60342/';
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
