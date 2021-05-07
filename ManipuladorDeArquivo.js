class Leitor{
    Ler(caminho){
        return "Conteudo do arquivo"
    }
}

class Escritor{
    Escrever(arquivo,conteudo){
        console.log("conteúdo escrito")
    }
}

class Criador{
    Criar(nome){
        console.log("Arquivo escrito!")
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Deletando arquivo!")
    }
}

class ManipuladorDeArquivo{
    constructor(nome){
        this.arquivo =  nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.Destruidor = new Destruidor()

    }    
}

var manipulador = new ManipuladorDeArquivo("meuarquivo.txt");

manipulador.leitor.Ler();
manipulador.escrever.Escrever();
manipulador.criador.Criar();
manipulador.Destruidor.Deletar();