class Utils {
    diferencaEmDias(dt01, dt02){
        
        const date01 = new Date(dt01);
        const date02 = new Date(dt02);

        const difeTempo = Math.abs(date02 - date01);
        const difeDia = Math.ceil(difeTempo / (1000 * 60 * 60 * 24));

        return difeDia;
    }

    mesesAtras(meses){  

        var pres = new Date();

        var mesesAtras = new Date(pres.setMonth(pres.getMonth()-meses));

        var dia = String(mesesAtras.getDate()).padStart(2, '0');
        var mes = String(mesesAtras.getMonth() + 1).padStart(2, '0');
        var ano = mesesAtras.getFullYear();

        return mes + '/' + dia + '/' + ano;
    }
}

module.exports = Utils;