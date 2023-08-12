# CAIXA DA LANCHONETE - João Pedro Igeski Morais

## SOBRE A ESTRUTURA DO CÓDIGO
### CLASSE CARDAPIO.JS
Armazena os items do cardápio e possui um método para retorná-los. Para cada item foi adicionado um campo extra chamada "codigoItemPrincipal", que serve para representar um relacionamento que um item do cardápio pode ter com outro por ser acompanhamento.

### CLASSE CAIXA-DA-LANCHONETE.JS
## Função validarMetodoDePagamento
Realiza a validação da entrada de método de pagamento do usuário.

## Função validarCarrinho
Verifica se os items inseridos pelo usuário existem e se os dados são válidos (se o item existe, se a quantidade é válida, se é um item extra sem o item principal). O retorno da função é um vetor carrinho com o objeto dos itens inseridos pelo usuário.

## Função calcularValorTotal
Agora que temos a lista de itens do usuário e a quantidade, realizamos uma varredura nas lista para pegar o preço dos itens, multiplicar pela quantidade e adicionar o preço a uma variável 'valor' que é retornada no final
