class NegociacoesView extends View{

    template(model) {
        return `<table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        ${model.negociacoes.map( ng => ` 

                                <tr> 
                                    <td>${DateHelper.dataParaTexto(ng.data)}</td>
                                    <td>${ng.quantidade}</td>
                                    <td>${ng.valor}</td>
                                    <td>${ng.volume}</td>
                                </tr>

                                `).join('')}
                    </tbody>
        
                    <tfoot>
                        <td colspan="3"></td>
                        <td> 
                        ${model.negociacoes.reduce((total, ng) => total + ng.volume, 0.0)}
                        </td>
                    </tfoot>
                </table>`;
    }
}
