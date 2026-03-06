# Sistema de Votação (Enquetes) em Tempo Real

Este projeto é um sistema completo para gerenciamento e visualização de enquetes, desenvolvido como teste técnico. Ele permite a criação de enquetes com múltiplas opções dinâmicas, controle de vigência (data de início e fim) e atualização de votos em tempo real.

## Tecnologias Utilizadas

**Backend (API Rest):**

- **Node.js e Express:** Roteamento e lógica da aplicação.
- **MySQL e Sequelize (ORM):** Banco de dados relacional para persistência de dados.
- **Socket.io:** WebSockets para atualização dos votos em tempo real.

**Frontend:**

- **HTML5 e CSS3:** Estrutura e estilização.
- **Flexbox:** Para construção de layouts responsivos e alinhamentos precisos.
- **JavaScript:** Consumo da API e conexão com WebSockets.

---

## Funcionalidades

### Gerenciamento (CRUD)

- **Criar Enquete:** Definição de título, data/hora de início e data/hora de término.
- **Opções Dinâmicas:** Cadastro obrigatório de no mínimo 3 opções de resposta por enquete.
- **Edição e Exclusão:** Gerenciamento completo das enquetes criadas.

### Visualização e Votação

- **Listagem de Enquetes:** Exibe todas as enquetes com seus respectivos status (_Não iniciada_, _Em andamento_, _Finalizada_).
- **Página da Enquete:** \* Apresenta as opções e o período de vigência.
  - Exibe o total de votos ao lado de cada opção.
- **Regras de Negócio de Votação:**
  - O botão de votar e as opções ficam **desabilitados** caso a enquete não esteja no período ativo (antes do início ou após o término).
  - **Realtime:** Os resultados são atualizados instantaneamente na tela para todos os usuários conectados sempre que um novo voto é computado.

---

## Pré-requisitos

Para rodar este projeto localmente, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18+ recomendada)
- [MySQL](https://www.mysql.com/) (Instância local ou em nuvem)

---

## Como rodar o projeto localmente

**1. Clone o repositório**

```bash
git clone https://github.com/ribeiromatheusdev/sistema-votacao-signo
cd sistema-votacao-signo
```

**2. Instale as dependências do Backend**

```bash
npm install
```

**3. Configure as Variáveis de Ambiente**
Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example` e insira as credenciais do seu banco de dados MySQL:

```env
DB_NAME=sistema_votacao
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_DIALECT=mysql
PORT=3000
```

**4. Execute as Migrations (Criação das tabelas)**

```bash
npx sequelize-cli db:migrate
```

**5. Inicie o Servidor**

```bash
npm run dev
```

_O servidor iniciará na porta 3000 (ou a definida no .env) e o frontend poderá ser acessado pelo navegador._

---

## Autor

**Matheus Ribeiro** Estudante de Engenharia de Software e Desenvolvedor.
