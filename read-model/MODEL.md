<h1 align="center"> Documentação aprofundada </h1>

<p align="center">
  <a href="#decisões-arquiteturais">Decisões Arquiteturais</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#estrutura-do-projeto">Estrutura do projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionamento">Funcionamento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sobre-a-api">Sobre a API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/https-shini/shopping-cart">Voltar</a>
</p>

<br>

## Decisões Arquiteturais:

- O projeto Carrinho de Compras com React JS segue uma arquitetura frontend, onde o frontend é responsável pela interface do usuário e pela lógica de interação com o usuário.
- Utiliza React JS como biblioteca principal para construção de interfaces de usuário interativas e dinâmicas.
- Integra a API do Mercado Livre para obtenção de dados de produtos e atualização dinâmica da lista de produtos disponíveis.

## Estrutura do projeto

➜  **HTML5:**
   - O frontend inclui arquivos HTML para estruturar o conteúdo da página, embora a maior parte da estrutura seja gerada dinamicamente pelo React JS.

➜  **CSS3:**
   - Utiliza arquivos CSS para estilizar e projetar a interface do usuário.

➜  **JavaScript:**
   - Além do React JS, o frontend inclui arquivos JavaScript para adicionar interatividade à página. Os arquivos JavaScript manipulam eventos do usuário, como cliques em botões de adição/remoção de produtos do carrinho, e atualizam dinamicamente o estado da interface do usuário.

➜  **React JS:**
   - O frontend é desenvolvido com React JS, uma biblioteca JavaScript para construção de interfaces de usuário.
   - Componentes React são utilizados para modularizar a aplicação e gerenciar o estado da interface do usuário de forma eficiente.

➜  **API do Mercado Livre:**
   - O frontend interage com a API do Mercado Livre para obter informações sobre os produtos disponíveis, como títulos, descrições, preços e imagens.

## **Sobre a API:**

<p>
  A API do Mercado Livre é uma interface RESTful que fornece acesso a uma ampla variedade de produtos disponíveis na plataforma do Mercado Livre. Ela oferece endpoints bem documentados para buscar informações específicas, como detalhes dos produtos, preços, descrições, imagens e muito mais.
<br><br>
Além disso, a API suporta recursos avançados, como pesquisa avançada, filtragem e paginação, permitindo aos desenvolvedores personalizar suas consultas de acordo com suas necessidades específicas. A autenticação é necessária para acessar a maioria dos endpoints, utilizando métodos como OAuth 2.0.
<br><br>
A API do Mercado Livre é uma ferramenta valiosa para desenvolvedores que desejam criar aplicativos relacionados a comércio eletrônico, oferecendo uma fonte confiável de dados sobre produtos disponíveis para compra na plataforma.
</p>

## **Funcionamento:**

- Os usuários acessam o aplicativo através de um navegador web.
- Eles podem visualizar uma lista de produtos disponíveis na tela inicial.
- Os usuários têm a opção de buscar por produtos específicos utilizando o campo de busca.
- Ao adicionar produtos ao carrinho, o estado da aplicação é atualizado dinamicamente para refletir as mudanças.
- Os usuários podem remover produtos do carrinho, atualizando novamente o estado da aplicação.

<br>

> **Informações Importantes sobre o Aplicativo** <br>
O projeto Carrinho de Compras com React JS permite aos usuários explorar e adicionar produtos ao carrinho de compras utilizando a API do Mercado Livre. <br>
O frontend é desenvolvido com ReactJS para uma experiência de usuário dinâmica e interativa. <br>
