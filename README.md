# TESTE PRATICO PARA ENTREVISTA


## Designer do projeto :

![designer passado para fazer](https://a.imagem.app/oPKGtC.jpeg)

## Projeto feito:

![designer passado para fazer](https://a.imagem.app/oPKHDY.jpeg)

### Header (TOP)

Foi feito um container e dentro dele construí dois cards.

- O primeiro card tem 2 links de navegação onde o nav eu limitei ele para 920px para que ficasse em cima dos links de navegação do card dois e alinhei o eixo Y do lado direito.

- Modelo Desktop: já no card 2 utilizei display flex, ele fica em coluna com space-around no eixo X e ao atingir uma proporção de 1480px ele assume a proporção de space-between X, o nav está alinhado no eixo Y para baixo ou Direita fazendo um efeito de desalinhamento igual o da imagem e utilizamos o width dentro da imagem para que as imagens de logo não tenha problema com expansão, criei um Dropdowm e um sub Dropdow. Peço desculpas com as classes, se não ficou muito legível, porém eu criei uma lista e dentro dessa lista tem outra lista que se aciona quando tiver um hover na linha do nav primário e a sub dropdowm se aciona do mesmo jeito do dropdow, porém ela só fica visível quando a linha do dropdowm é acionado.

### Slider

O slider foi usado o **JQUERY** e uma Lib **NIVO-SLIDER**, criamos duas divs, uma para receber temas e agrupamento e a outra que agrupa as imagens dentro, para trocar o tema do slider podemos ir na pasta Lib e depois ir na pasta nivo-slider, lá tem uma pasta chamada themes essa pasta tem todos os temas de slider para trocar só importar o style que tem dentro uma dessas pastas no head.

```sh
    <link rel="stylesheet" href="./lib/nivo-slider/themes/nome-da-pasta/estilo-aqui" type="text/css" />
```

E trocar a class que está na div container de slider trocar de **theme-default** para o tema desejado.
```sh

            <!-- slider -->
            <div class="slider-wrapper theme-default"> //trovar essa classe pelo tema desejado
                <!-- Container que agrupa as imagens e faz o slider com o Nivo-slider -->
                <div id="slider" class="nivoSlider">
                    <!-- Aqui podemos colocar qualquer imagem sem precisar fazer configuração que já vira um slider -->
                    <img src="./assets/slider-exemple-1.jpg" data-thumb="assets/slider.exemple-1.jpg" alt="imagem de de exemplo do site" width="894px"
                        height="290px" title="imagem de de exemplo do site"/>
                        <!-- As imagens estão com o tamanho declarado na imagem por que uma Pratica de SEO é ter tamanho e titulo esplicito -->
                    <img src="./assets/slider-exemple-2.jpg" data-thumb="assets/slider-exemple-2.jpg" alt="imagem de de exemplo do site"  title="imagem de de exemplo do site"
                        width="894px" height="290px" />
                </div>
            </div>
```
### Information

A seção Information tem uma lista e uma imagem simples, nela usamos o display flex e seu tamanho é limitado. 

### featured (DESTAQUI)

- Dentro de uma section coloquei uma lista não ordenada e um subtítulo h2, dentro da lista possui 4 cards de 196x163 e dentro do card tem uma imagem e um link logo abaixo direcionando para a categoria desejada.

 - o card tem sua proporção descrita no designer 196 x 163 e uma distância de 30px em telas grandes e telas pequenas 10px, ao atingir um limite máximo que quebre um card para baixo, terá um responsivo para que faça duas colunas com 2 cards para que o responsivo fique atraente.Os links também tem o responsivo e uma margin de 20px na parte de baixo, empurrando o link para baixo e deixando espaço nos links.

### Footer (RODAPÉ)

- Aqui usei a própria tag footer para usar o display flex, alinhar os elementos no centro no eixo Y e X, e deixar eles em coluna um embaixo do outro.

- A lista possui o mesmo estilo do Header, as propriedades usadas se encontra na linha 69 do arquivo Style, que também se encontra na pasta Style. Na lista do footer usei display flex para poder ficar um do lado do outro e uma distância de 15px de cada tag deixei os elementos em coluna.

- Agora no footer por inteiro usei padding-block para deixar espaço no eixo Y, e um margin-bottom no H2 para dar mais espaço na parte de baixo do container footer.

## TECNOLOGIAS

- HTML
- CSS
- JAVASCRIPT
- JQUERY

## AUTHOR

Herbert souza