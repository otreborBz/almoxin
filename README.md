# almox.in

# Projeto Almox.in

## Visão Geral
O Almox.in é uma aplicação desenvolvida para gerenciar o estoque de peças e os usuários de um sistema de almoxarifado. Ele permite o cadastro, consulta, edição e exclusão de peças, bem como o gerenciamento de usuários com diferentes níveis de permissão.

## Funcionalidades

### Para Administradores:
- Gerenciar usuários:
  - Adicionar, editar e excluir usuários.
  - Listar todos os usuários cadastrados.
  
- Gerenciar peças:
  - Adicionar, editar e excluir peças.
  - Consultar e listar peças.

### Para Usuários:
- Visualizar e listar peças cadastradas no sistema.
- Realizar buscas de peças por filtros específicos.

## Regras de Negócio

- **Admin:**
  - Pode gerenciar todos os usuários e peças.
  - Todos os campos são obrigatórios para criação de novos usuários.

- **Usuários comuns:**
  - Podem apenas consultar e listar peças.

- **Peças:**
  - Campos obrigatórios: Nome, máquina e localização.
  - Campos opcionais: Descrição, número do fabricante e código de compra.

## Tecnologias Utilizadas
- **Frontend:** React Native.
- **Backend:** Firebase.

## Estrutura de Telas

### Tela de Login:
- Campo para email e senha.
- Botão de login.
- Link para termos de uso.

### Tela de Administração:
#### Usuários:
- Lista de usuários cadastrados.
- Campo de busca para localizar usuários.
- Botão para adicionar novos usuários.
- Ao clicar em um usuário, abre a tela de edição.

#### Peças:
- Lista de peças cadastradas.
- Campo de busca para localizar peças.
- Botão para adicionar novas peças.
- Ao clicar em uma peça, abre a tela de edição.

### Tela de Criação/Edição:
#### Usuários:
- Campos para nome, email e senha.
- Botão para salvar ou cancelar.

#### Peças:
- Campos para nome, máquina, descrição, número do fabricante, código de compra e localização.
- Botão para salvar ou cancelar.

## Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npx expo start
   ```

4. Escaneie o código QR no Expo Go para rodar no dispositivo móvel.

## Contribuição
Fique à vontade para contribuir com melhorias ou correções! Basta abrir um Pull Request com as alterações propostas.

## Licença
Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

Projeto desenvolvido por **CodeBr | Roberto Carvalho**.

