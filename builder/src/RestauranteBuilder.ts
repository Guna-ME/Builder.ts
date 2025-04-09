// BurgerOrderBuilder.ts
import { BurgerOrder, TipoDePao, Proteina, IngredientesOpcionais, Bebida } from '../src/Restaurante';

export class BurgerOrderBuilder {
    private pao: TipoDePao;
    private proteina: Proteina;
    private ingredientes: IngredientesOpcionais[] = [];
    private bebida: Bebida;

    constructor() {
        this.pao = 'Pão de Hambúrguer';  
        this.proteina = 'Carne';  
        this.bebida = 'Nenhuma';  
    }

    setPao(pao: TipoDePao): BurgerOrderBuilder {
        this.pao = pao;
        return this;
    }

    setProteina(proteina: Proteina): BurgerOrderBuilder {
        this.proteina = proteina;
        return this;
    }

    addIngrediente(ingrediente: IngredientesOpcionais): BurgerOrderBuilder {
        this.ingredientes.push(ingrediente);
        return this;
    }

    removeIngrediente(ingrediente: IngredientesOpcionais): BurgerOrderBuilder {
        this.ingredientes = this.ingredientes.filter(item => item !== ingrediente);
        return this;
    }

    setBebida(bebida: Bebida): BurgerOrderBuilder {
        this.bebida = bebida;
        return this;
    }

    build(): BurgerOrder {
        return {
            pao: this.pao,
            proteina: this.proteina,
            ingredientes: this.ingredientes,
            bebida: this.bebida
        };
    }
}
