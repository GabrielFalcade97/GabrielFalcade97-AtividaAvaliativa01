class FiltroFaturas {
    removerFaturasMenor2000(faturas) {
        var faturaMenor2000 = [];

        faturas.forEach(element => {
            if(element.valor >= 2000)
                faturaMenor2000.push(element);
        });

        return faturaMenor2000;
    }
}

module.exports = FiltroFaturas