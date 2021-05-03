class Filme{  //Nome da classe definida
    constructor( titulo, ano, genero, diretor, duracao){ // atributos da classe em javascript, tem que ter exatamente esse nome, tem que colocar isso para definir o atributo, dentro deel voce coloca o parametro que suas variaveis de atributo vão receber
        this.titulo = titulo; //Atributos são como variaveis, só que pertencem a uma classe.Parar criar um, é bem semelhante ao processo de criação de variavel, com a adição do 'this.' antes do nome do atributo
        this.ano = ano;
        this.genero = genero;                   //Contructor:  é basicamente um funçãi especial que é responsavel  
        this.diretor = diretor;                  //por pegar classe e criar uma copia na memoria, ele é responsavel por gerar os objetos na memoria
        this.duracao = duracao;                   // pega cria um objeto e retorna ele para mim
        this.atores = [];

    } //para diferenciar o this.titulo = titulo, é o this, toda a variavel que é precedida por ele é atributo e o que elea recebe é a varialvel do parametro 

    Reproduzir(){ // metodos são simplesmente como função, o importante é deixa os metodos com a primeira letra maiuscula
        console.log("Reproduzindo....")
    }

    Pausar(){
        console.log("Pausado ||");
    }

    Avançar(){
        console.log("Avançar >>")
    }

    Fechar(){
        console.log("Fechar X")
    }
}

var vingadores = new Filme("Vingadores 2", 2014, "Ação", "Alguem", "2h"); // quando se colo esse new e chama a classe significa que ele está pegando a classe filme e fazendo ela nova com atributos de valores novos, sem nada do anterior, só pegar a estrutura sem valores



console.log("Título do filme:" + vingadores.titulo);
console.log("Ano de lançamento:" + vingadores.ano);

var batman = new Filme("Batman",2009, "Ação", "Alguem 2", "2h30");



console.log(batman.titulo);
console.log(batman.ano);
console.log(batman.genero);



// var hulk = new Filme();

// console.log("Título do filme:" + hulk.titulo);
// console.log("Ano de lançamento:" + hulk.ano);

// var starWars = new Filme();

// console.log("Título do filme:" + starWars.titulo);
// console.log("Ano de lançamento:" + starWars.ano);