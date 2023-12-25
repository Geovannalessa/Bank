export class Negociacao{

    constructor( 
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ){}

    //gets para a leitura, já que os atributos são privados
    
    get volume(): number{
        return this.quantidade * this.valor;
    }
    get data():Date{
        const data = new Date(this.data.getTime());
        return data;
    }
}