const cardapio = [
  {
    código: 'cafe',
    descricao: 'Café',
    valor: 3.0,
    codigoItemPrincipal: null,
  },
  {
    código: 'chantily',
    descricao: 'Chantily (extra do Café)',
    valor: 1.5,
    codigoItemPrincipal: 'cafe',
  },
  {
    código: 'suco',
    descricao: 'Suco Natural',
    valor: 6.2,
    codigoItemPrincipal: null,
  },
  {
    código: 'sanduiche',
    descricao: 'Sanduíche',
    valor: 6.5,
    codigoItemPrincipal: null,
  },
  {
    código: 'queijo',
    descricao: 'Queijo (extra do Sanduíche)',
    valor: 2.0,
    codigoItemPrincipal: 'sanduiche',
  },
  {
    código: 'salgado',
    descricao: 'Salgado',
    valor: 7.25,
    codigoItemPrincipal: null,
  },
  {
    código: 'combo1',
    descricao: '1 Suco e 1 Sanduíche',
    valor: 9.5,
    codigoItemPrincipal: null,
  },
  {
    código: 'combo2',
    descricao: '1 Café e 1 Sanduíche',
    valor: 7.5,
    codigoItemPrincipal: null,
  },
];

class Cardapio {
  constructor() {}

  getItems() {
    return cardapio;
  }
}

export default Cardapio;
