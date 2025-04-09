import { Carro, TipoDeMotor, TipoDeCambio, Opcionais } from '../src/Carro';

export class CarroBuilder {
    private modelo: string;
    private tipoDeMotor: TipoDeMotor;
    private cor: string;
    private tipoDeCambio: TipoDeCambio;
    private opcionais: Opcionais[] = [];

    constructor(modelo: string, tipoDeMotor: TipoDeMotor, cor: string, tipoDeCambio: TipoDeCambio) {
        this.modelo = modelo;
        this.tipoDeMotor = tipoDeMotor;
        this.cor = cor;
        this.tipoDeCambio = tipoDeCambio;
    }

    addOpcional(opcional: Opcionais): CarroBuilder {
        if (!this.opcionais.includes(opcional)) {
            this.opcionais.push(opcional);
        }
        return this;
    }

    private validarOpcionais(): boolean {
        return this.opcionais.length >= 2;
    }

    build(): Carro | Error {
        if (!this.validarOpcionais()) {
            throw new Error('O carro deve ter pelo menos dois opcionais selecionados.');
        }
        return {
            modelo: this.modelo,
            tipoDeMotor: this.tipoDeMotor,
            cor: this.cor,
            tipoDeCambio: this.tipoDeCambio,
            opcionais: this.opcionais,
        };
    }
}
