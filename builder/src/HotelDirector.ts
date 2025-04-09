import { HotelBuilder } from '../src/HotelBuilder';
import { Opcional } from '../src/Hotel';

export class HotelDirector {
    private builder: HotelBuilder;

    constructor(builder: HotelBuilder) {
        this.builder = builder;
    }

    criarPacoteBasico(): any {
        return this.builder
            .setTipoDeQuarto('Standard')
            .build();
    }

    criarPacoteLuxoComExtras(): any {
        return this.builder
            .setTipoDeQuarto('Luxo')
            .addOpcional('Café da Manhã')
            .addOpcional('Wi-Fi Premium')
            .build();
    }

    criarPacotePresidencialComTudo(): any {
        return this.builder
            .setTipoDeQuarto('Presidencial')
            .addOpcional('Café da Manhã')
            .addOpcional('Vista para o Mar')
            .addOpcional('Wi-Fi Premium')
            .addOpcional('Late Checkout')
            .build();
    }
}
