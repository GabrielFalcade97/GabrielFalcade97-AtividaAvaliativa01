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

    removerFaturasMa2500_Me3000(faturas){
        var filtra = [];
        var mAtras = util.mesesAtras(2);

        faturas.forEach(element =>{
            if(!(element.valor >= 2500 && element.valor < 3000 && util.diferencaEmDias(element.cliente.dataInclusao, mAtras) <=60)){
                filtra.push(element);
            }
        });
        return filtra;

    }

}

module.exports = FiltroFaturas