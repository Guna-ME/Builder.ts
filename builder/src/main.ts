import { BurgerOrderBuilder } from '../src/RestauranteBuilder';
import { BurgerOrderDirector } from '../src/RestauranteDirector';

import { HotelBuilder } from '../src/HotelBuilder';
import { HotelDirector } from '../src/HotelDirector';

import { CarroBuilder } from '../src/CarroBuilder';
import { CarroDirector } from '../src/CarroDirector';

//RESTAURANTE

const burgerOrderBuilder = new BurgerOrderBuilder();
const burgerOrderDirector = new BurgerOrderDirector(burgerOrderBuilder);

const hamburguerPadrao = burgerOrderDirector.criarHamburguerPadrao();
const hamburguerVegetarianoComSuco = burgerOrderDirector.criarHamburguerVegetarianoComSuco();
const hamburguerCompleto = burgerOrderDirector.criarHamburguerCompleto();

console.log(hamburguerPadrao);
console.log(hamburguerVegetarianoComSuco);
console.log(hamburguerCompleto);


//HOTEL

const hotelBuilder = new HotelBuilder(5);
const hotelDirector = new HotelDirector(hotelBuilder);

const pacoteBasico = hotelDirector.criarPacoteBasico();
const pacoteLuxoComExtras = hotelDirector.criarPacoteLuxoComExtras();
const pacotePresidencialComTudo = hotelDirector.criarPacotePresidencialComTudo();

console.log(pacoteBasico);
console.log(pacoteLuxoComExtras);
console.log(pacotePresidencialComTudo);

//CARRO

const carroBuilder = new CarroBuilder('Fusca', 'Gasolina', 'Azul', 'Manual');
const carroDirector = new CarroDirector(carroBuilder);

const carroBasico = carroDirector.criarPacoteBasico();
const carroLuxo = carroDirector.criarPacoteLuxo();
const carroEsportivo = carroDirector.criarPacoteEsportivo();

console.log('Carro Básico:', carroBasico);
console.log('Carro Luxo:', carroLuxo);
console.log('Carro Esportivo:', carroEsportivo);

const carroBuilderIncompleto = new CarroBuilder('Civic', 'Elétrico', 'Preto', 'Automático');
carroBuilderIncompleto.addOpcional('Bancos de Couro');

try {
    const carroIncompleto = carroBuilderIncompleto.build();
    console.log('Carro configurado com sucesso:', carroIncompleto);
} catch (error) {
    console.error('Erro ao configurar o carro:', error.message);
}