export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //gets para a leitura, já que os atributos são privados
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this.data.getTime());
        return data;
    }
}
