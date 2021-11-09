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

    test('filtrando as faturas com valor >= 2000 e < 2500 e com data <= um mês atrás',() => {
        var resultado = filtroFatura.removerFaturasMa2000_Me2500(lista_Faturas);
        var codigos = resultado.map((elem) => elem.codigo);

        expect(resultado.length).toBe(8);
        
        expect(codigos).toEqual(
            [
                1, 2, 3, 6, 7, 8, 9, 10
            ]
        );
    });

    test('filtrando as faturas com valor >=2500 e <3000 com data inclusão cliente <=dois meses atrás', () => {
        var resultado = filtroFatura.removerFaturasMa2500_Me3000(lista_Faturas);
        var codigos = resultado.map((elem) => elem.codigo);

        expect(resultado.length).toBe(10);
        
        expect(codigos).toEqual(
            [
                1, 2, 3, 4, 5,6, 7, 8, 9, 10
            ]
        );
    });;

    test('filtrando as faturas com valor > 4000 e cliente dos estados do sul', () =>{
        var resultado = filtroFatura.removerFaturasMa4000Sul(lista_Faturas);
        var codigos = resultado.map((elem) => elem.codigo);

        expect(resultado.length).toBe(8);
        
        expect(codigos).toEqual(
            [
                1, 2, 3, 4, 5, 6, 7, 8
            ]
        )
    });

});