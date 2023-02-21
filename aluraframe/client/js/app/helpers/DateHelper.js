class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada!')
    }

    static textoParaData(texto) {
        /// verifica se esta no formato certo
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
        {
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }
        
        return new Date(...texto
            .split("-")
            .map((item, indice) => item - indice % 2)
        );
    }

    static dataParaTexto(data) {
        let dia = data.getDate();
        dia = dia < 10 ? "0" + dia : dia;

        let mes = data.getMonth() + 1;
        mes = mes < 10 ? "0" + mes : mes;

        return `${dia}/${mes}/${data.getFullYear()}`;
    }
}