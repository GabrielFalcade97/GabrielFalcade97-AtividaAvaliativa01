const Utils = require('./util');
const util = new Utils();

class FiltroFaturas {
    removerFaturasMenor2000(faturas) {

        return faturas.filter((elem) => elem.valor >= 2000);

    }

    removerFaturasMa2000_Me2500(faturas) {

        var filtra = [];
        var mAtras = util.mesesAtras(1);

        faturas.forEach(element => {
            if(!(element.valor >= 2000 && element.valor < 2500 &&
                util.diferencaEmDias(element.data, mAtras) <= 30)){
                filtra.push(element);
            }
        });

        return filtra;

    }
}

module.exports = FiltroFaturas