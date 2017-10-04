export class DownloadResult {
    nome: string;
    links: [{
        nome: string;
        link: string;
    }];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
