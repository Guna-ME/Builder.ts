export type TipoDeQuarto = 'Standard' | 'Luxo' | 'Presidencial';
export type Opcional = 'Café da Manhã' | 'Vista para o Mar' | 'Wi-Fi Premium' | 'Late Checkout';

export interface Hotel {
    tipoDeQuarto: TipoDeQuarto;
    opcionais: Opcional[];
    numeroDeNoites: number;
}
