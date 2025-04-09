import { Hotel, TipoDeQuarto, Opcional } from '../src/Hotel';

export class HotelBuilder {
    private tipoDeQuarto: TipoDeQuarto;
    private opcionais: Opcional[] = [];
    private numeroDeNoites: number;

    constructor(numeroDeNoites: number) {
        if (numeroDeNoites <= 0) {
            throw new Error('O número de noites deve ser maior que zero.');
        }
        this.numeroDeNoites = numeroDeNoites;
        this.tipoDeQuarto = 'Standard';
    }

    setTipoDeQuarto(tipo: TipoDeQuarto): HotelBuilder {
        this.tipoDeQuarto = tipo;
        return this;
    }

    addOpcional(opcional: Opcional): HotelBuilder {
        this.opcionais.push(opcional);
        return this;
    }

    removeOpcional(opcional: Opcional): HotelBuilder {
        this.opcionais = this.opcionais.filter(item => item !== opcional);
        return this;
    }

    build(): Hotel {
        return {
            tipoDeQuarto: this.tipoDeQuarto,
            opcionais: this.opcionais,
            numeroDeNoites: this.numeroDeNoites
        };
    }
}
