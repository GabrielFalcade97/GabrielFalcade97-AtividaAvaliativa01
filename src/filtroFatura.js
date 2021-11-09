class FiltroFaturas {
    removerFaturasMenor2000(faturas) {

        return faturas.filter((elem) => elem.valor >= 2000);
        
    }
}

module.exports = FiltroFaturas