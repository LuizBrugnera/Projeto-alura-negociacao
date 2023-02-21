class NegociacaoController{

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adicionar(event){
        event.preventDefault();
        
        /// converte o this._inputData de string para um objeto Date
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
        /// converte o Date para string
        let diasMesAno = DateHelper.dataParaTexto(negociacao.data);

        console.log(negociacao)
        console.log(diasMesAno)

    }
}
