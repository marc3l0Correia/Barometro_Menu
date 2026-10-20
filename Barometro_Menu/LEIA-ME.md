# Ementa Bar(Ô)metro

Esta pasta é o site da ementa. Tudo o que se vê no telemóvel do cliente vem daqui.

## O que cada ficheiro faz

| Ficheiro | Para quê |
|---|---|
| `menu.js` | **Preços, nomes e artigos.** É o que vais editar mais vezes. |
| `fotos/` | **Fotografias dos artigos.** Basta pôr lá a imagem com o nome certo. |
| `index.html` | Estrutura da página. Normalmente não se mexe. |
| `style.css` | Cores e letras. |
| `app.js`, `art.js` | Funcionamento e desenhos de substituição. Não mexer. |

## Mudar um preço

1. Abre o `menu.js` no Xcode.
2. Procura o artigo (Cmd+F, por exemplo `Fino`).
3. Muda só o preço entre aspas: `'1,00'` passa a `'1,10'`.
4. Grava (Cmd+S) e publica (ver abaixo).

## Acrescentar ou tirar um artigo

Cada artigo é uma linha. Copia uma linha da mesma categoria, cola por baixo e muda os nomes (português, inglês, francês, espanhol) e o preço. Para tirar, apaga a linha. Dentro de uma categoria, todas as linhas acabam em vírgula, menos a última.

O último valor da linha é o desenho de substituição (por exemplo `A.beer('#F2B632')`). Podes copiar o de um artigo parecido.

## Pôr uma fotografia

1. Tira a foto e **exporta-a em JPG**. As fotos do iPhone vêm em HEIC, que muitos telemóveis não mostram. No Mac: abre a foto na Pré-visualização, **Ficheiro > Exportar**, formato **JPEG**.
2. Reduz o tamanho para cerca de **1200 píxeis de largura** (Pré-visualização > Ferramentas > Ajustar tamanho). Fotos grandes demais deixam a ementa lenta.
3. Dá-lhe o **nome exato** da tabela de baixo, tudo em minúsculas e sem acentos.
4. Mete o ficheiro na pasta `fotos/` e publica.

Quando existe a fotografia, aparece no lugar do desenho e a nota "Imagem ilustrativa" desaparece. Sem fotografia, continua o desenho. A foto aparece com proporção 4:3 (deitada), por isso fotografa com essa moldura.

## Publicar as alterações

Depois de gravar, as alterações têm de ir para o GitHub. Há duas formas:

- **No site do GitHub:** abre o repositório, **Add file > Upload files**, arrasta os ficheiros mudados (por exemplo `menu.js`, ou fotografias para dentro de `fotos/`) e clica **Commit changes**.
- **Com o Git:** no Xcode (ou no GitHub Desktop), faz **Commit** e **Push**.

O site atualiza em cerca de um minuto. Se o telemóvel mostrar o preço antigo, fecha e volta a abrir o separador do navegador.

## Nomes dos ficheiros de fotografia

| Categoria | Artigo | Nome do ficheiro |
|---|---|---|
| Especial da casa | Cachorro Especial | `cachorro-especial.jpg` |
| Especial da casa | Hambúrguer Especial | `hamburguer-especial.jpg` |
| Cafés | Café | `cafe.jpg` |
| Cafés | Pingo | `pingo.jpg` |
| Cafés | Descafeinado | `descafeinado.jpg` |
| Cafés | Carioca | `carioca.jpg` |
| Cafés | Carioca de limão | `carioca-de-limao.jpg` |
| Cafés | Abatanado | `abatanado.jpg` |
| Cafés | Meia de leite | `meia-de-leite.jpg` |
| Cafés | Cevada | `cevada.jpg` |
| Pastelaria | Pastelaria diversa | `pastelaria-diversa.jpg` |
| Pastelaria | Croissant com manteiga | `croissant-com-manteiga.jpg` |
| Pastelaria | Croissant com queijo ou fiambre | `croissant-com-queijo-ou-fiambre.jpg` |
| Pastelaria | Croissant misto | `croissant-misto.jpg` |
| Pão e torradas | Pão com manteiga | `pao-com-manteiga.jpg` |
| Pão e torradas | Torrada bijou | `torrada-bijou.jpg` |
| Pão e torradas | Torrada de forma | `torrada-de-forma.jpg` |
| Pão e torradas | Meia torrada | `meia-torrada.jpg` |
| Sandes | Sande de fiambre | `sande-de-fiambre.jpg` |
| Sandes | Sande de queijo | `sande-de-queijo.jpg` |
| Sandes | Sande mista | `sande-mista.jpg` |
| Sandes | Sande de panado | `sande-de-panado.jpg` |
| Sandes | Sande de febras | `sande-de-febras.jpg` |
| Sandes | Sande de salpicão | `sande-de-salpicao.jpg` |
| Salgadinhos | Rissol de carne, frango ou camarão | `rissol-de-carne-frango-ou-camarao.jpg` |
| Salgadinhos | Rissol de leitão | `rissol-de-leitao.jpg` |
| Salgadinhos | Bolinho de bacalhau | `bolinho-de-bacalhau.jpg` |
| Salgadinhos | Coxinha | `coxinha.jpg` |
| Salgadinhos | Pataniscas | `pataniscas.jpg` |
| Salgadinhos | Porção de salgadinhos | `porcao-de-salgadinhos.jpg` |
| Tábuas e camarões | Tábua de enchidos | `tabua-de-enchidos.jpg` |
| Tábuas e camarões | Tábua de queijos | `tabua-de-queijos.jpg` |
| Tábuas e camarões | Tábua mista | `tabua-mista.jpg` |
| Tábuas e camarões | Camarões | `camaroes.jpg` |
| Cozinha | Sopa | `sopa.jpg` |
| Cozinha | Bifanas | `bifanas.jpg` |
| Cozinha | Prato de moelas | `prato-de-moelas.jpg` |
| Cozinha | Prato de rojões | `prato-de-rojoes.jpg` |
| Cervejas | Fino | `fino.jpg` |
| Cervejas | Super Bock | `super-bock.jpg` |
| Cervejas | Super Bock Preta | `super-bock-preta.jpg` |
| Cervejas | Carlsberg | `carlsberg.jpg` |
| Refrigerantes e águas | Coca-Cola | `coca-cola.jpg` |
| Refrigerantes e águas | Fanta | `fanta.jpg` |
| Refrigerantes e águas | Guaraná | `guarana.jpg` |
| Refrigerantes e águas | Seven Up | `seven-up.jpg` |
| Refrigerantes e águas | Sumol | `sumol.jpg` |
| Refrigerantes e águas | Ice Tea | `ice-tea.jpg` |
| Refrigerantes e águas | Água 0,33 | `agua-0-33.jpg` |
| Refrigerantes e águas | Água 0,5 | `agua-0-5.jpg` |
| Refrigerantes e águas | Água das Pedras | `agua-das-pedras.jpg` |
| Refrigerantes e águas | Água das Pedras limão | `agua-das-pedras-limao.jpg` |
| Aperitivos | Favaios | `favaios.jpg` |
| Aperitivos | Favaios com cerveja | `favaios-com-cerveja.jpg` |
| Aperitivos | Martini | `martini.jpg` |
| Aperitivos | Martini com cerveja | `martini-com-cerveja.jpg` |
| Whisky | Shot de whisky novo | `shot-de-whisky-novo.jpg` |
| Whisky | Shot de whisky velho | `shot-de-whisky-velho.jpg` |
| Whisky | Whisky novo | `whisky-novo.jpg` |
| Whisky | Whisky velho | `whisky-velho.jpg` |
