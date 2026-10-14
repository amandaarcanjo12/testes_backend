const { multiplicar, dividir, subtrair, somar } = require("./calculadora");

/* --------- SOMA ------------- */
/* Somar dois números positivos */
/* Somar com números negativos  */
describe('somar', () => {

    test('Deve somar dois números corretamente', () => {
        expect(somar(5, 5)).toBe(10);
        expect(somar(-2, 3)).toBe(1);
    });

});

/* ------ SUBTRAIR ------ */
/* Subitrair dois números */
describe('subtrair', () => {
    test('Deve subtrair dois números corretamente', () => {
        expect(subtrair(10, 4)).toBe(6);
        expect(subtrair(3, 5)).toBe(-2);
    });
});

///////////////////////////////////////////////

describe("multiplicar", () => {
    test("multiplica dois números", () => {
        expect(multiplicar(3, 4)).toBe(12);
    });

    test("qualquer número vezes zero é zero", () => {
        expect(multiplicar(5, 0)).toBe(0);
    });
});

describe("dividir", () => {
    test("divide dois números", () => {
        expect(dividir(10, 2)).toBe(5);
    });

    test("lança erro ao dividir por zero", () => {
        expect(() => dividir(10, 0)).toThrow("Divisão por zero não é permitida");
    });
});