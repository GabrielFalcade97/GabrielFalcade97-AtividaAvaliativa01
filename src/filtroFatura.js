const Utils = require('./util');
const util = new Utils();

class FiltroFaturas {
    removerFaturasMenor2000(faturas) {

        return faturas.filter((elem) => elem.valor >= 2000);

    }

    removerFaturasMa2000_Me2500(faturas) {
        var mAtras = util.mesesAtras(1);

        return faturas.filter((elem)=> !(elem.valor >= 2000 && 
                elem.valor < 2500 && util.diferencaEmDias(elem.data, mAtras)<=30)
        );

    }

    removerFaturasMa2500_Me3000(faturas){
        var filtra = [];
        var doisMeses = util.mesesAtras(2);

        return faturas.filter((elem)=> !(elem.valor >= 2500 && 
                elem.valor < 3000 && util.diferencaEmDias(elem.cliente.dataInclusão, doisMeses) <=60)
        );

    }

    removerFaturasMa4000Sul(faturas){

        return faturas.filter((elem)=> !(elem.valor > 4000 && 
                util.arrayIdentElement(elem.cliente.estado, ['PR', 'SC', 'RS'])));
    }

}

module.exports = FiltroFaturas