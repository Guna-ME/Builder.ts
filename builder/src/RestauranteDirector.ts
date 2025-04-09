import { BurgerOrderBuilder } from '../src/RestauranteBuilder';
import { Bebida, IngredientesOpcionais } from '../src/Restaurante';

export class BurgerOrderDirector {
    private builder: BurgerOrderBuilder;

    constructor(builder: BurgerOrderBuilder) {
        this.builder = builder;
    }

    criarHamburguerPadrao(): any {
        return this.builder
            .setPao('Pão de Hambúrguer')
            .setProteina('Carne')
            .setBebida('Nenhuma')
            .build();
    }

    criarHamburguerVegetarianoComSuco(): any {
        return this.builder
            .setPao('Pão Sem Glúten')
            .setProteina('Vegetariano')
            .addIngrediente('Queijo')
            .addIngrediente('Alface')
            .addIngrediente('Tomate')
            .setBebida('Suco')
            .build();
    }

    criarHamburguerCompleto(): any {
        return this.builder
            .setPao('Pão Integral')
            .setProteina('Carne')
            .addIngrediente('Queijo')
            .addIngrediente('Cebola')
            .setBebida('Refrigerante')
            .build();
    }
}
