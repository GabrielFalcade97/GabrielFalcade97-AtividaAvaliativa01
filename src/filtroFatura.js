const Utils = require('./util');
const util = new Utils();

class FiltroFaturas {
    removerFaturasMenor2000(faturas) {

        return faturas.filter((elem) => elem.valor >= 2000);

    }

    removerFaturasMa2000_Me2500(faturas) {

        var mAtras = util.mesesAtras(1);

        return faturas.filter((elem)=> !(elem.valor >= 2000 && elem.valor < 2500 && util.diferencaEmDias(elem.data, mAtras)<=30)
        );

    }
}

module.exports = FiltroFaturas