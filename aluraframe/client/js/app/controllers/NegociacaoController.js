class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        let self = this;

        this._listaNegociacoes = new Proxy(new ListaNegocicacoes(), {
            get(target, prop, receiver) {
                if(['adicionar', 'esvaziar'].includes(prop) && typeof(target[prop]) === typeof(Function)) {

                    return function() {

                        console.log(target, prop, arguments);
                        Reflect.apply(target[prop], target, arguments);
                        self._negociacoesView.update(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            }
        });

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);


    }

    adicionar(event) {
        event.preventDefault();

        this._listaNegociacoes.adicionar(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = "Negociação adicionada com sucesso!";
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
    }

    apagar() {
        this._listaNegociacoes.esvaziar();
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = "Negociação removidas com sucesso!";
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}
