
interface Livro {
    nome: string;
    autor: string;
    ano: number;
}

const book: Livro = {
    nome: "Anne with an e",
    autor: "Lucy Maud Montgomery",
    ano: 1908
};

function exibirLivro (livro: Livro): void { 

    console.log(`nome: ${livro.nome}`);
    console.log(`autor: ${livro.autor}`);
    console.log(`ano: ${livro.ano}`);
}

exibirLivro(book);