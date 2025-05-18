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

git clone https://github.com/rafaelfriske/Teste-SW.git
cd Teste-SW

### 2. 📦 Instale as dependências
bash
npm install
### 3. ⚡ Inicie o servidor de desenvolvimento
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

## ✨ Funcionalidades

| 🔧 Ação          | 📋 Detalhes                                                                 |
|------------------|----------------------------------------------------------------------------|
| **Adicionar**    | Preencha título, descrição e data → Atualização automática na tabela       |
| **Editar**       | Altere status no modal (Pendente/Concluído) → Salve as alterações          |
| **Remover**      | Exclusão apenas visual (dados permanecem no BD para relatórios)   

## 🏆 Considerações Finais

### 💡 Sobre o Projeto
Este projeto demonstra **funcionalidades reais do meu dia a dia**, incluindo:
- 🪄 Modais inteligentes que carregam dados dinâmicos
- 🔄 Atualização em tempo real das tabelas
- 🎨 Utilizei a IA (DeepSeek) para fazer um design mais moderno
-> Considerações finais

- 🕒 **Desenvolvimento:** 2 dias (Sábado/Domingo)

Fico à disposição para dúvidas ou uma conversa. Obrigado pela oportunidade!

Se precisar de mais alguma ajuda ou quiser que eu revise algum trecho específico, estou aqui!
