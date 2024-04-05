#Alunas: 
- Bruna Heloísa Araújo da Silva: 2525240
- Ana luiza Jorge campos: 2525232


# Lista1_designpattern

# Implementação de Design Patterns na Arquitetura de Software: Sistema de Gerenciamento de Contatos

## Introdução
Este projeto consiste em um sistema simples de gerenciamento de contatos, implementado em JavaScript. O objetivo é permitir que os usuários adicionem, removam, listem e busquem contatos por meio de uma interface de linha de comando (CLI). O código foi estruturado seguindo as melhores práticas de desenvolvimento e utiliza dois padrões de projeto: **Adapter** e **Strategy**.

## Classes e suas Funções

1. **Classe Contato**:
   - Representa um contato com os atributos nome, telefone e email.

2. **Padrão de Projeto Estrutural: Adapter (Classe ArmazenamentoContatos)**:
   - A classe `ArmazenamentoContatos` encapsula a lógica de armazenamento dos contatos em uma lista interna.
   - O padrão Adapter é utilizado para permitir que diferentes formas de armazenamento possam ser facilmente incorporadas no futuro, sem a necessidade de modificar o código existente. Isso proporciona flexibilidade e facilita a manutenção do sistema.

3. **Classe GerenciadorContatos**:
   - Responsável por interagir com os contatos, fornecendo métodos para adicionar, remover e listar contatos.
   - Utiliza uma instância da classe `ArmazenamentoContatos` para gerenciar a lista de contatos de forma encapsulada.

4. **Padrão de Projeto Comportamental: Strategy (Classe EstrategiaBusca)**:
   - A classe `EstrategiaBusca` implementa diferentes algoritmos de busca de contatos.
   - Utilizamos o padrão Strategy para permitir que a funcionalidade de busca possa variar independentemente dos algoritmos de busca. Isso facilita a extensão e manutenção do sistema, pois novos algoritmos de busca podem ser facilmente adicionados sem modificar o código existente.

Classe CLI (Interface de Linha de Comando)

A classe CLI é responsável por interagir com o usuário por meio da linha de comando. Ela oferece opções para adicionar, remover, listar e buscar contatos no sistema de gerenciamento implementado. Através dessa interface, os usuários podem executar diversas operações relacionadas aos contatos.

## Funcionalidades Principais

1. **Adicionar Contato**:
   - Através da CLI, os usuários podem inserir novos contatos, fornecendo informações como nome, telefone e email.

2. **Remover Contato**:
   - A opção de remoção permite que os usuários excluam contatos existentes da lista.

3. **Listar Contatos**:
   - A CLI exibe a lista completa de contatos disponíveis, permitindo que os usuários visualizem todas as informações relevantes.

4. **Buscar Contato**:
   - Os usuários podem buscar contatos específicos com base em critérios como nome, telefone ou email.

## Benefícios da Classe CLI

- **Interação Amigável**:
  - A CLI oferece uma interface intuitiva e fácil de usar para os usuários interagirem com o sistema de gerenciamento de contatos.

- **Centralização das Operações**:
  - Todas as operações relacionadas aos contatos são realizadas por meio da CLI, garantindo uma abordagem centralizada e organizada.

- **Flexibilidade e Extensibilidade**:
  - A classe CLI pode ser estendida para incluir novas funcionalidades conforme necessário, sem afetar outras partes do código.

Em resumo, a Classe CLI é um componente essencial para a interação entre os usuários e o sistema de gerenciamento de contatos, proporcionando uma experiência eficiente e prática.
