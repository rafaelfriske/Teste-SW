# Teste-SW
Projeto para teste na empresa SW Campinas

🛠️ Tecnologias e Linguagens
<div style="display: flex; gap: 10px; align-items: center;">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /> <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" /> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" /> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />

# 📋 Pré-requisitos
 Node.js ≥ v18,
 Angular CLI (npm install -g @angular/cli)

## 🚀 **Como Executar o Projeto**

### 1. **Clone o repositório**
```bash
git clone https://github.com/rafaelfriske/Teste-SW.git
cd Teste-SW

2. 📦 Instale as dependências
bash
npm install
3. ⚡ Inicie o servidor de desenvolvimento
bash
ng serve
👉 Acesse: http://localhost:4200

## 🔍 **Configuração Prévia (IMPORTANTE)**

Antes de fazer login, verifique a URL da API no arquivo:  
`src/environments/environment.ts`  

📌 **No meu caso específico:**  
```typescript
export const environment = {
  apiUrl: 'https://localhost:44307/api' // IIS Express padrão
};

🔗 Documentação da API: Link aqui https://github.com/rafaelfriske/api-sw/blob/main/README.md

## 🔐 Como Usar (Login de Teste)

### 📝 Credenciais de Teste
**E-mail:** `teste@teste.com`  
**Senha:** `123456`

### 🚀 Passos para Login
1. Acesse a página de login em `http://localhost:4200/login`
2. Insira as credenciais acima
3. Clique no botão **"Entrar"**

🔒 *Aviso: Estas são credenciais temporárias para testes*
.

✨ Funcionalidades Principais
<table> <tr> <td width="30%"> <h4>📝 Adicionar Tarefa</h4> <ul> <li>Preencha todos os campos:</li> <ul> <li><code>Título</code></li> <li><code>Descrição</code></li> <li><code>Data Prevista</code></li> </ul> <li>A tabela de <b>Tarefas Pendentes</b> atualiza automaticamente</li> </ul> </td> <td width="30%"> <h4>🔄 Alterar Status</h4> <ol> <li>Clique em <kbd>Editar Tarefa</kbd></li> <li>No modal, altere para <b>"Concluído"</b></li> <li>Salve</li> </ol> <small>↩️ O mesmo processo reverte para "Pendente"</small> </td> <td width="30%"> <h4>🗑️ Remoção</h4> <p>O botão <span style="color:red"><b>Remover</b></span>:</p> <ul> <li>Remove apenas do front-end</li> <li>Mantém no banco para relatórios</li> </ul> </td> </tr> </table>

-> Você será redirecionado para a tela de tarefas.
Para adicionar uma nova tarefa, preencha todos os campos: Título, Descrição e Data Prevista. A tabela de "tarefas pendentes" será atualizada automaticamente.
Para alterar o status de pendente para concluído, clique em "Editar Tarefa", abra o modal, altere para "Concluído" e salve. A tabela de tarefas concluídas será atualizada automaticamente.
Para reverter uma tarefa concluída para pendente, siga o mesmo procedimento.
O botão "Remover" irá remover a tarefa do front-end, mas ela continuará no banco de dados para fins de relatórios.

-> Considerações finais
Este projeto demonstra algumas funcionalidades do meu dia a dia, como o uso de modais que carregam dados da tela de tarefas para edição, por exemplo. Para o design, utilizei uma IA disponível (DeepSeek).
O projeto foi desenvolvido no sábado e parte do domingo. Fico à disposição para dúvidas ou uma conversa. Obrigado pela oportunidade!

Se precisar de mais alguma ajuda ou quiser que eu revise algum trecho específico, estou aqui!
