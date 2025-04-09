export type TipoDePao = 'Pão de Hambúrguer' | 'Pão Integral' | 'Pão Sem Glúten';
export type Proteina = 'Carne' | 'Frango' | 'Vegetariano';
export type IngredientesOpcionais = 'Queijo' | 'Alface' | 'Tomate' | 'Cebola' | 'Molho Especial';
export type Bebida = 'Água' | 'Refrigerante' | 'Suco' | 'Nenhuma';

export interface BurgerOrder {
    pao: TipoDePao;
    proteina: Proteina;
    ingredientes: IngredientesOpcionais[];
    bebida: Bebida;
}
