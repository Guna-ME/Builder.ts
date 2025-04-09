import { CarroBuilder } from '../src/CarroBuilder';
import { Opcionais } from '../src/Carro';

export class CarroDirector {
    private builder: CarroBuilder;

    constructor(builder: CarroBuilder) {
        this.builder = builder;
    }

    criarPacoteBasico(): any {
        return this.builder
            .addOpcional('Teto Solar')
            .addOpcional('Som Premium')
            .build();
    }

    criarPacoteLuxo(): any {
        return this.builder
            .addOpcional('Teto Solar')
            .addOpcional('Som Premium')
            .addOpcional('Bancos de Couro')
            .build();
    }

    criarPacoteEsportivo(): any {
        return this.builder
            .addOpcional('Som Premium')
            .addOpcional('Bancos de Couro')
            .build();
    }
}
