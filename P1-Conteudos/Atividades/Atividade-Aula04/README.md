# Entrega da Atividade - Aula 04: Qualidade de Código com ESLint e Prettier no CI

**Aluno:** Arthur Augusto
**Disciplina:** Integração e Entrega Contínua (IEC)
**Professora:** Lucineide

## Objetivo
Garantir a qualidade e a padronização do código configurando o ESLint e o Prettier, e integrá-los no pipeline de CI com GitHub Actions.

## Exercícios Concluídos

### 1. Instalação do ESLint e Prettier
As ferramentas foram instaladas como dependências de desenvolvimento. No terminal, foram executados os comandos `npm init -y` para criar o `package.json` e `npm install eslint prettier --save-dev` na raiz do projeto.

### 2. Configuração do ESLint
O ESLint foi inicializado com o comando `npx eslint --init`. A configuração foi feita para verificar problemas de sintaxe em um projeto React usando JavaScript, gerando o arquivo `.eslintrc.js`.

### 3. Configuração do Prettier
Para definir o estilo do código, foi criado o arquivo `.prettierrc` na raiz do projeto. As regras configuradas definem o uso obrigatório de ponto e vírgula no final (`"semi": true`), aspas simples (`"singleQuote": true`) e indentação de 2 espaços (`"tabWidth": 2`).

### 4. Teste Local do ESLint
Para garantir o funcionamento antes da integração, o arquivo `index.js` foi alterado com um código de teste. O comando `npx eslint .` identificou os problemas e o comando `npx prettier --write .` foi utilizado para corrigi-los automaticamente.

### 5. Integração do ESLint no GitHub Actions
O arquivo `.github/workflows/ci.yml` foi atualizado para executar o ESLint automaticamente em commits na branch `dev` e em Pull Requests. O novo job faz o checkout do repositório, configura o Node.js (versão 18), instala as dependências (`npm install`) e roda a verificação (`npx eslint .`).