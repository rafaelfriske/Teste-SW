Teste-SW
Projeto para teste na empresa SW Campinas

🛠️ Tecnologias e Linguagens
Utilizamos as seguintes tecnologias:

TypeScript
Angular
HTML5
Sass
📋 Pré-requisitos
Antes de começar, certifique-se de ter:

Node.js na versão 18 ou superior
Angular CLI instalado globalmente (
npm install -g @angular/cli
)
🚀 Como Executar o Projeto
1. Clone o repositório
Abra o terminal e execute:

git clone https://github.com/rafaelfriske/Teste-SW.git
cd Teste-SW

2. Instale as dependências
Ainda no terminal, rode:

npm install

3. Inicie o servidor de desenvolvimento
Para rodar o projeto localmente, execute:

ng serve
Depois, acesse no navegador: http://localhost:4200

🔍 Configuração Prévia (IMPORTANTE)
Antes de fazer login, confira a URL da API no arquivo:
src/environments/environment.ts

No seu caso, ela deve estar assim:

export const environment = {
  apiUrl: 'https://localhost:44307/api' // IIS Express padrão
};
Para mais detalhes, consulte a documentação da API: Link aqui

🔐 Como Usar (Login de Teste)
Credenciais de Teste
E-mail: teste@teste.com
Senha: 123456
Passos para fazer login
Acesse a página de login em http://localhost:4200/login
Insira as credenciais acima
Clique no botão "Entrar"
Obs.: Essas credenciais são temporárias para testes.

✨ Funcionalidades
Ação	Detalhes
Adicionar	Preencha título, descrição e data; a tabela atualiza automaticamente
Editar	Altere o status (Pendente/Concluído) no modal e salve as mudanças
Remover	Remoção visual (os dados permanecem no banco para relatórios)
🏆 Considerações Finais
Sobre o projeto
Este projeto demonstra funcionalidades reais do meu dia a dia, incluindo:

Modais inteligentes que carregam dados dinâmicos
Atualizações em tempo real das tabelas
Uso de IA (DeepSeek) para um design mais moderno
Desenvolvimento
Tempo total: aproximadamente 2 dias (Sábado e Domingo)
Fico à disposição para dúvidas ou uma conversa. Obrigado pela oportunidade!

Se precisar de mais alguma ajuda ou quiser que eu revise algum trecho,
## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.

Teste-SW
Projeto para teste na empresa SW Campinas

🛠️ Tecnologias e Linguagens
Utilizamos as seguintes tecnologias:

TypeScript
Angular
HTML5
Sass
📋 Pré-requisitos
Antes de começar, certifique-se de ter:

Node.js na versão 18 ou superior
Angular CLI instalado globalmente (
npm install -g @angular/cli
)
🚀 Como Executar o Projeto
1. Clone o repositório
Abra o terminal e execute:

git clone https://github.com/rafaelfriske/Teste-SW.git
cd Teste-SW
2. Instale as dependências
Ainda no terminal, rode:

npm install
3. Inicie o servidor de desenvolvimento
Para rodar o projeto localmente, execute:

ng serve
Depois, acesse no navegador: http://localhost:4200

🔍 Configuração Prévia (IMPORTANTE)
Antes de fazer login, confira a URL da API no arquivo:
src/environments/environment.ts

No seu caso, ela deve estar assim:

export const environment = {
  apiUrl: 'https://localhost:44307/api' // IIS Express padrão
};
Para mais detalhes, consulte a documentação da API: Link aqui

🔐 Como Usar (Login de Teste)
Credenciais de Teste
E-mail: teste@teste.com
Senha: 123456
Passos para fazer login
Acesse a página de login em http://localhost:4200/login
Insira as credenciais acima
Clique no botão "Entrar"
Obs.: Essas credenciais são temporárias para testes.

✨ Funcionalidades
Ação	Detalhes
Adicionar	Preencha título, descrição e data; a tabela atualiza automaticamente
Editar	Altere o status (Pendente/Concluído) no modal e salve as mudanças
Remover	Remoção visual (os dados permanecem no banco para relatórios)
🏆 Considerações Finais
Sobre o projeto
Este projeto demonstra funcionalidades reais do meu dia a dia, incluindo:

Modais inteligentes que carregam dados dinâmicos
Atualizações em tempo real das tabelas
Uso de IA (DeepSeek) para um design mais moderno
Desenvolvimento
Tempo total: aproximadamente 2 dias (Sábado e Domingo)
Fico à disposição para dúvidas ou uma conversa. Obrigado pela oportunidade!

Se precisar de mais alguma ajuda ou quiser que eu revise algum trecho,



