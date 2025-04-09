export type TipoDeMotor = 'Gasolina' | 'Elétrico' | 'Híbrido';
export type TipoDeCambio = 'Manual' | 'Automático';
export type Opcionais = 'Teto Solar' | 'Som Premium' | 'Bancos de Couro';

export interface Carro {
    modelo: string;
    tipoDeMotor: TipoDeMotor;
    cor: string;
    tipoDeCambio: TipoDeCambio;
    opcionais: Opcionais[];
}
