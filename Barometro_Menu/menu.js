/* =====================================================================
   MENU.JS  -  é AQUI que mudas preços, nomes e artigos.

   Cada artigo é uma linha:
     it( nomes nos 4 idiomas , 'PREÇO' , ilustração )

   Para mudar um preço: altera só o texto entre aspas, por exemplo
     '0,90'  ->  '1,00'
   Mantém a vírgula decimal e as aspas. Não escrevas o símbolo €.

   Para acrescentar um artigo: copia uma linha existente, cola por baixo
   (na mesma categoria), muda o nome e o preço. Todas as linhas de uma
   categoria levam vírgula no fim, menos a última.

   Para tirar um artigo: apaga a linha (e, se era a última da categoria,
   apaga a vírgula da linha anterior).

   As fotografias não se mexem aqui: vê o ficheiro LEIA-ME.md.
   ===================================================================== */

var t = function (pt, en, fr, es) { return { pt: pt, en: en, fr: fr, es: es }; };
var same = function (s) { return t(s, s, s, s); };

/* ---------- content ---------- */
var slug = function (s) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};
var it = function (n, p, art, d) { return { n: n, p: p, a: art, d: d || null, k: slug(n.pt) }; };

var UI = {
  tagline: t('Bar de tapas & cervejas artesanais', 'Tapas bar & craft beer', 'Bar à tapas & bières artisanales', 'Bar de tapas y cervezas artesanales'),
  sub: t('Ementa', 'Menu', 'Carte', 'Carta'),
  hint: t('Toque num produto para ver a foto.', 'Tap an item to see its photo.', 'Touchez un produit pour voir sa photo.', 'Toca un producto para ver su foto.'),
  special: t('Especial da casa', 'House special', 'Spécialité maison', 'Especialidad de la casa'),
  vat: t('IVA à taxa legal em vigor.', 'VAT at the legal rate.', 'TVA au taux légal en vigueur.', 'IVA al tipo legal vigente.'),
  close: t('Fechar', 'Close', 'Fermer', 'Cerrar'),
  cap: t('Imagem ilustrativa', 'Illustrative image', 'Image illustrative', 'Imagen ilustrativa')
};

var SPECIALS = [
  it(t('Cachorro Especial', 'Special Hot Dog', 'Hot-dog spécial', 'Perrito caliente especial'), '3,50', A.hotdog(),
    t('Com a salsicha do Leandro.', "Made with Leandro's sausage.", 'Avec la saucisse de Leandro.', 'Con la salchicha de Leandro.')),
  it(t('Hambúrguer Especial', 'Special Burger', 'Burger spécial', 'Hamburguesa especial'), '5,50', A.burger(),
    t('Receita da casa.', 'House recipe.', 'Recette de la maison.', 'Receta de la casa.'))
];

var CATS = [
  { id: 'cafes', t: t('Cafés', 'Coffee', 'Cafés', 'Cafés'), items: [
    it(t('Café', 'Espresso', 'Café', 'Café solo'), '0,90', A.cup('#3A2012', { s: 0.88 })),
    it(t('Pingo', 'Espresso with a drop of milk', 'Noisette', 'Café cortado'), '0,90', A.cup('#4A2A16', { s: 0.88, milk: true })),
    it(t('Descafeinado', 'Decaf', 'Décaféiné', 'Descafeinado'), '0,90', A.cup('#3A2012', { s: 0.88 })),
    it(t('Carioca', 'Weak espresso', 'Café léger', 'Café suave'), '0,70', A.cup('#7A5230', { s: 0.88 })),
    it(t('Carioca de limão', 'Lemon peel infusion', 'Infusion au citron', 'Infusión de limón'), '0,70', A.cup('#C9A646', { s: 0.88, lemon: true })),
    it(t('Abatanado', 'Long black', 'Café allongé', 'Café alargado'), '1,00', A.cup('#4A2A16')),
    it(t('Meia de leite', 'Half coffee, half milk', 'Café au lait', 'Café con leche'), '1,20', A.cup('#B98B5E', { milk: true })),
    it(t('Cevada', 'Barley drink', "Boisson à l'orge", 'Bebida de cebada'), '0,70', A.cup('#A8793F'))
  ]},
  { id: 'pastelaria', t: t('Pastelaria', 'Pastries', 'Pâtisserie', 'Pastelería'), items: [
    it(t('Pastelaria diversa', 'Assorted pastries', 'Pâtisseries variées', 'Pastelería variada'), '1,20', A.tarts()),
    it(t('Croissant com manteiga', 'Butter croissant', 'Croissant au beurre', 'Cruasán con mantequilla'), '1,60', A.croissantButter()),
    it(t('Croissant com queijo ou fiambre', 'Croissant with cheese or ham', 'Croissant au fromage ou jambon', 'Cruasán con queso o jamón'), '1,80', A.croissantFill(true, false)),
    it(t('Croissant misto', 'Ham & cheese croissant', 'Croissant jambon-fromage', 'Cruasán mixto'), '2,40', A.croissantFill(true, true))
  ]},
  { id: 'torradas', t: t('Pão e torradas', 'Bread & toast', 'Pain et toasts', 'Pan y tostadas'), items: [
    it(t('Pão com manteiga', 'Bread and butter', 'Pain beurré', 'Pan con mantequilla'), '0,60', A.bread('butter')),
    it(t('Torrada bijou', 'Small toast', 'Petit toast', 'Tostada pequeña'), '0,80', A.bread('bijou')),
    it(t('Torrada de forma', 'Sliced bread toast', 'Toast de pain de mie', 'Tostada de pan de molde'), '1,20', A.bread('forma')),
    it(t('Meia torrada', 'Half toast', 'Demi-toast', 'Media tostada'), '0,80', A.bread('half'))
  ]},
  { id: 'sandes', t: t('Sandes', 'Sandwiches', 'Sandwichs', 'Sándwiches'), items: [
    it(t('Sande de fiambre', 'Ham sandwich', 'Sandwich au jambon', 'Sándwich de jamón'), '1,40', A.sandwich(['#E99AA0', '#E99AA0'])),
    it(t('Sande de queijo', 'Cheese sandwich', 'Sandwich au fromage', 'Sándwich de queso'), '1,40', A.sandwich(['#F4CE55', '#F4CE55'])),
    it(t('Sande mista', 'Ham & cheese sandwich', 'Sandwich jambon-fromage', 'Sándwich mixto'), '1,80', A.sandwich(['#E99AA0', '#F4CE55', '#E99AA0'])),
    it(t('Sande de panado', 'Breaded cutlet sandwich', 'Sandwich escalope panée', 'Sándwich de escalope empanado'), '2,50', A.sandwich(['#7FAE4D', '#D79A3C', '#C98630'])),
    it(t('Sande de febras', 'Pork loin sandwich', 'Sandwich échine de porc', 'Sándwich de lomo de cerdo'), '2,50', A.sandwich(['#7FAE4D', '#8A4B2A', '#7A3F22'])),
    it(t('Sande de salpicão', 'Salpicão sausage sandwich', 'Sandwich au salpicão', 'Sándwich de salpicão'), '2,20', A.sandwich(['#A63D2F', '#C24F3F', '#A63D2F']))
  ]},
  { id: 'salgadinhos', t: t('Salgadinhos', 'Savoury snacks', 'Salés', 'Salgadinhos'), items: [
    it(t('Rissol de carne, frango ou camarão', 'Rissole: beef, chicken or shrimp', 'Rissole bœuf, poulet ou crevette', 'Rissol de carne, pollo o gamba'), '1,00', A.rissol(false)),
    it(t('Rissol de leitão', 'Suckling pig rissole', 'Rissole de cochon de lait', 'Rissol de cochinillo'), '1,20', A.rissol(true)),
    it(t('Bolinho de bacalhau', 'Salt cod fritter', 'Beignet de morue', 'Buñuelo de bacalao'), '1,00', A.ball()),
    it(t('Coxinha', 'Chicken croquette', 'Croquette de poulet', 'Coxinha, croqueta de pollo'), '1,00', A.cox()),
    it(t('Pataniscas', 'Salt cod fritters, Portuguese style', 'Pataniscas de morue', 'Pataniscas de bacalao'), '1,00', A.pata()),
    it(t('Porção de salgadinhos', 'Snack platter', 'Assortiment de salés', 'Ración de salgadinhos'), '6,00', A.snacks(),
      t('Seleção variada, para partilhar.', 'Mixed selection, to share.', 'Sélection variée, à partager.', 'Selección variada para compartir.'))
  ]},
  { id: 'tabuas', t: t('Tábuas e camarões', 'Boards & shrimp', 'Planches et crevettes', 'Tablas y gambas'), items: [
    it(t('Tábua de enchidos', 'Charcuterie board', 'Planche de charcuterie', 'Tabla de embutidos'), '8,50', A.board('enchidos'),
      t('Seleção de enchidos tradicionais.', 'A selection of traditional cured sausages.', 'Sélection de charcuteries traditionnelles.', 'Selección de embutidos tradicionales.')),
    it(t('Tábua de queijos', 'Cheese board', 'Planche de fromages', 'Tabla de quesos'), '9,00', A.board('queijos'),
      t('Queijos nacionais, com pão.', 'Portuguese cheeses, served with bread.', 'Fromages portugais, servis avec du pain.', 'Quesos portugueses, con pan.')),
    it(t('Tábua mista', 'Mixed board', 'Planche mixte', 'Tabla mixta'), '12,00', A.board('mista'),
      t('Enchidos e queijos.', 'Cured sausages and cheeses.', 'Charcuterie et fromages.', 'Embutidos y quesos.')),
    it(t('Camarões', 'Shrimp', 'Crevettes', 'Gambas'), '9,50', A.shrimp())
  ]},
  { id: 'cozinha', t: t('Cozinha', 'Kitchen', 'Cuisine', 'Cocina'), items: [
    it(t('Sopa', 'Soup', 'Soupe', 'Sopa'), '2,00', A.soup()),
    it(t('Bifanas', 'Pork steak rolls', 'Sandwichs de porc mariné', 'Bocadillo de cerdo marinado'), '2,20', A.bifana()),
    it(t('Prato de moelas', 'Gizzard stew', 'Gésiers mijotés', 'Mollejas de ave guisadas'), '3,00', A.moelas()),
    it(t('Prato de rojões', 'Fried pork bites', 'Rojões, porc frit', 'Rojões, cerdo frito'), '4,00', A.rojoes())
  ]},
  { id: 'cervejas', t: t('Cervejas', 'Beer', 'Bières', 'Cervezas'), items: [
    it(t('Fino', 'Draught beer', 'Demi pression', 'Caña'), '1,00', A.beer('#F2B632', 0.82)),
    it(same('Super Bock'), '1,30', A.beer('#EFAE2B')),
    it(same('Super Bock Preta'), '1,40', A.beer('#3A1E10')),
    it(same('Carlsberg'), '1,30', A.beer('#F5BC3A'))
  ]},
  { id: 'refrescos', t: t('Refrigerantes e águas', 'Soft drinks & water', 'Sodas et eaux', 'Refrescos y aguas'), items: [
    it(same('Coca-Cola'), '1,50', A.can('#C8372D')),
    it(same('Fanta'), '1,50', A.can('#F28C1E')),
    it(same('Guaraná'), '1,50', A.can('#3E8E41')),
    it(same('Seven Up'), '1,50', A.can('#2E9E5B')),
    it(same('Sumol'), '1,50', A.can('#EE9B24')),
    it(same('Ice Tea'), '1,50', A.can('#C98A3F')),
    it(t('Água 0,33', 'Water 0.33 l', 'Eau 0,33 l', 'Agua 0,33 l'), '0,80', A.water()),
    it(t('Água 0,5', 'Water 0.5 l', 'Eau 0,5 l', 'Agua 0,5 l'), '1,00', A.water()),
    it(t('Água das Pedras', 'Sparkling water (Pedras)', 'Eau gazeuse (Pedras)', 'Agua con gas (Pedras)'), '1,20', A.water({ gas: true })),
    it(t('Água das Pedras limão', 'Sparkling water, lemon', 'Eau gazeuse, citron', 'Agua con gas y limón'), '1,50', A.water({ gas: true, lemon: true }))
  ]},
  { id: 'aperitivos', t: t('Aperitivos', 'Aperitifs', 'Apéritifs', 'Aperitivos'), items: [
    it(same('Favaios'), '1,20', A.favaios()),
    it(t('Favaios com cerveja', 'Favaios with beer', 'Favaios avec bière', 'Favaios con cerveza'), '1,60', A.favaiosBeer()),
    it(same('Martini'), '1,20', A.martini(false)),
    it(t('Martini com cerveja', 'Martini with beer', 'Martini avec bière', 'Martini con cerveza'), '1,50', A.martini(true))
  ]},
  { id: 'whisky', t: t('Whisky', 'Whisky', 'Whisky', 'Whisky'), items: [
    it(t('Shot de whisky novo', 'Whisky shot, young', 'Shot de whisky jeune', 'Chupito de whisky joven'), '1,50', A.shot('#D9922B')),
    it(t('Shot de whisky velho', 'Whisky shot, aged', 'Shot de whisky vieux', 'Chupito de whisky añejo'), '2,00', A.shot('#A8601A')),
    it(t('Whisky novo', 'Whisky, young', 'Whisky jeune', 'Whisky joven'), '3,00', A.whisky('#D9922B')),
    it(t('Whisky velho', 'Whisky, aged', 'Whisky vieux', 'Whisky añejo'), '4,00', A.whisky('#A8601A'))
  ]}
];

