// Definição da classe 
class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

// Armazenar os contatos
class ArmazenamentoContatos {
    constructor() {
        this.contatos = [];
    }

    adicionar(contato) {
        this.contatos.push(contato);
    }

    remover(contato) {
        const index = this.contatos.indexOf(contato);
        if (index !== -1) {
            this.contatos.splice(index, 1);
        }
    }

    listar() {
        return this.contatos;
    }
}

// Gerenciador de contatos
class GerenciadorContatos {
    constructor(adaptador) {
        this.adaptador = adaptador;
    }

    adicionarContato(nome, telefone, email) {
        const novoContato = new Contato(nome, telefone, email);
        this.adaptador.adicionar(novoContato);
    }

    removerContato(contato) {
        this.adaptador.remover(contato);
    }

    listarContatos() {
        return this.adaptador.listar();
    }
}

// Estratégia de busca de contatos
class EstrategiaBusca {
    buscar(contatos, termo) {
        return contatos.filter(contato =>
            contato.nome.toLowerCase().includes(termo.toLowerCase())
        );
    }
}

// Interface de linha de comando (CLI)
class CLI {
    constructor(gerenciadorContatos) {
        this.gerenciadorContatos = gerenciadorContatos;
        this.estrategiaBusca = new EstrategiaBusca();
    }

    adicionarContato(nome, telefone, email) {
        this.gerenciadorContatos.adicionarContato(nome, telefone, email);
    }

    removerContato(contato) {
        this.gerenciadorContatos.removerContato(contato);
    }

    listarContatos() {
        const contatos = this.gerenciadorContatos.listarContatos();
        console.log("Lista de Contatos:");
        contatos.forEach(contato =>
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`)
        );
    }
}

// Buscar contatos com base em um termo
buscarContatos(termo) {
    const contatos = this.gerenciadorContatos.listarContatos();
    const resultados = this.estrategiaBusca.buscar(contatos, termo);
    console.log("Resultados da Busca:");
    resultados.forEach(contato =>
        console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`)
    );
}

// Exemplo
const adaptador = new ArmazenamentoContatos();
const gerenciadorContatos = new GerenciadorContatos(adaptador);
const interfaceCLI = new CLI(gerenciadorContatos);

// Adicionando alguns contatos
interfaceCLI.adicionarContato("Alice", "111111", "alice@example.com");
interfaceCLI.adicionarContato("Bob", "222222", "bob@example.com");
interfaceCLI.adicionarContato("Carol", "333333", "carol@example.com");

// Listando os contatos
interfaceCLI.listarContatos();

// Buscando contatos com o termo "bo"
interfaceCLI.buscarContatos("bo");

// Buscando contatos com o termo "car"
interfaceCLI.buscarContatos("car");

