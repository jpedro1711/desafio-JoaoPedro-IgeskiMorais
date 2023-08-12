import Cardapio from './cardapio.js';

class CaixaDaLanchonete {
  constructor() {
    this.cardapio = new Cardapio();
    this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    try {
      const metodo = this.validarMetodoDePagamento(metodoDePagamento);
      const carrinho = this.validarCarrinho(itens);
      const valor = this.calcularValorTotal(metodo, carrinho);
      console.log(
        'R$ ' + Number.parseFloat(valor).toFixed(2).replace('.', ',')
      );
      return 'R$ ' + Number.parseFloat(valor).toFixed(2).replace('.', ',');
    } catch (error) {
      return error.message;
    }
  }

  calcularValorTotal(metodo, carrinho) {
    let valor = 0;
    carrinho.forEach((prod) => {
      valor += prod.produto.valor * prod.quantidade;
    });
    if (metodo == 'dinheiro') {
      return valor * 0.95;
    } else if (metodo == 'credito') {
      return valor * 1.03;
    } else {
      return valor;
    }
  }

  validarCarrinho(itens) {
    const carrinho = [];

    if (itens.length == 0) {
      throw new Error('Não há itens no carrinho de compra!');
    }

    itens.forEach((item) => {
      const [codigoItem, quantidade] = item.split(',');
      if (quantidade == 0) {
        throw new Error('Quantidade inválida!');
      }
      let itemExists;
      this.cardapio.getItems().filter((e) => {
        if (e.código == codigoItem) {
          itemExists = true;
        }
      });
      if (!itemExists) {
        throw new Error('Item inválido!');
      }
      const [produto] = this.cardapio
        .getItems()
        .filter((item) => item.código == codigoItem);
      if (produto.codigoItemPrincipal == null) {
        carrinho.push({ produto, quantidade });
      } else {
        const cod = produto.codigoItemPrincipal;
        const mainItemExists = carrinho.find((e) => e.produto.código == cod);
        if (!mainItemExists) {
          throw new Error('Item extra não pode ser pedido sem o principal');
        } else {
          carrinho.push({ produto, quantidade });
        }
      }
    });
    return carrinho;
  }

  validarMetodoDePagamento(metodoDePagamento) {
    let metodoEscolhido = null;
    this.formasDePagamento.forEach((metodo) => {
      if (metodo === metodoDePagamento) {
        metodoEscolhido = metodo;
      }
    });
    if (metodoEscolhido == null) {
      throw new Error('Forma de pagamento inválida!');
    } else {
      return metodoEscolhido;
    }
  }
}

const caixa = new CaixaDaLanchonete();
caixa.calcularValorDaCompra('credito', ['combo1,1', 'cafe,2']);

export { CaixaDaLanchonete };
