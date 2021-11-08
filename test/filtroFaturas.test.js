const FiltroFatura = require('../src/filtroFatura');
const lista_Faturas = require('../src/lista_faturas');
const filtroFatura = new FiltroFatura();


describe('FiltroFatura', () => {
    test('filtrando as faturas com valor < 2000', () => {
        var resultado = filtroFatura.removerFaturasMenor2000(lista_Faturas);
        var codigos = resultado.map((elem) => elem.codigo);

        expect(resultado.length).toBe(8);
       
        expect(codigos).toEqual(
            [
                3, 4, 5, 6, 7, 8, 9, 10
            ]
        );
    });
});