class Dado{

    constructor(faces){
        this.faces = faces;
    }

    Rolar(){
       console.log("Reseultado do dado:" + this.GetRandomIntInclusive(1,this.faces));
    }

    GetRandomIntInclusive(min, max) { // gerando numeros aleatórios
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

var d6 = new Dado(6);
var d12 = new Dado(12);
var d100 = new Dado(100);

d6.Rolar();
d12.Rolar();
d100.Rolar();
