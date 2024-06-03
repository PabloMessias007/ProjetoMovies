let listaFilmes = document.getElementById('lista');
let addButton = document.getElementById('botao')

class Filmes{
    constructor(title, director, year){
        this.title = title;
        this.director = director;
        this.year = year;
    }
    get Titulo(){
        return this.title
    }

    get Diretor(){
        return this.director
    }

    get Ano(){
        return this.year
    }
}

addButton.addEventListener("click", exibir)

function exibir(){
    let titulo = document.getElementById('titulo').value;
    let diretor = document.getElementById('diretor').value;
    let ano = document.getElementById('ano').value;
    let filme = new Filmes(titulo, diretor, ano);

    if (titulo, diretor, ano) {
    const elemento = document.createElement('p');
    elemento.innerHTML = `${filme.Titulo} - ${filme.Diretor} (${filme.Ano})`;
    listaFilmes.appendChild(elemento);
    }
}