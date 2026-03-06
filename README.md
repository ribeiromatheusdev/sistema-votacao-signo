# Sistema de Votação (Enquetes)

Este projeto é uma API robusta e uma interface de usuário para gerenciamento de enquetes, desenvolvido como teste técnico. O foco principal foi a aplicação de uma arquitetura limpa (Clean Architecture) com separação de responsabilidades entre Models, Services e Controllers.

## Tecnologias Utilizadas

**Backend:**

- **Node.js (ES Modules):** Ambiente de execução.
- **Express:** Framework web para construção da API REST.
- **Sequelize ORM & Migrations:** Gerenciamento profissional do banco de dados MySQL.
- **Dotenv:** Gerenciamento de variáveis de ambiente.
- **CORS:** Segurança e permissão de acesso entre Front e Back.

**Frontend:**

- **HTML5:** Estrutura da interface.
- **Tailwind CSS:** Estilização moderna e responsiva via utilitários.
- **JavaScript (Fetch API):** Consumo assíncrono da API para votação e listagem.

---

## Funcionalidades Implementadas

### Backend (Regras de Negócio)

- **Criação de Enquetes:** Cadastro com título, data de início e data de término.
- **Validação de Opções:** Bloqueio automático no Service caso a enquete possua menos de 3 opções.
- **Status Dinâmico:** Cálculo em tempo real do status (_Não iniciada_, _Em andamento_ ou _Finalizada_) baseado na data atual do servidor.
- **Controle de Votação:** O sistema impede votos em enquetes fora do período de vigência, retornando erro de regra de negócio.

### Frontend (Interface)

- **Dashboard de Enquetes:** Listagem automática de todas as enquetes cadastradas.
- **Feedback Visual:** Botões de votação são desabilitados e estilizados automaticamente caso a enquete não esteja ativa.
- **Criação Simplificada:** Modal para cadastro de novas enquetes com opções dinâmicas.

---

## Como rodar o projeto localmente

**1. Clone o repositório**

```bash
git clone https://github.com/ribeiromatheusdev/sistema-votacao-signo
cd sistema-votacao-signo/backend
```

**2. Instale as dependências**

```bash
npm install
```

**3. Configure o Banco de Dados**

Crie um arquivo .env na raiz da pasta backend seguindo o modelo abaixo:

```bash
DB_NAME=sistema_votacao
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_DIALECT=mysql
PORT=3000
```

**4. Execute as Migrations**

Para criar as tabelas e relacionamentos no seu MySQL:

```bash
npx sequelize-cli db:migrate
```

**5. Inicie a API**

```bash
npm run dev
```

**6. Acesse o Frontend**

Basta abrir o arquivo index.html (localizado na pasta frontend) no seu navegador preferido.

## Autor

**Matheus Ribeiro**
Estudante de Engenharia de Software.
