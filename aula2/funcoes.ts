function saudacao(nome: string): string {
    return `olá, ${nome}!`; 
}
console.log(saudacao('Isabella'));

interface Usuario {
    nome: string;
    idade: number;
    email: string;
}

function exibirUsuario(usuario: Usuario): void {
    console.log(`nome: ${usuario.nome}`);
    console.log(`idade: ${usuario.idade}`);
}

// Corrigido: sem o ".Usuario" e com o email adicionado
exibirUsuario({ 
    nome: 'Fernanda', 
    idade: 22, 
    email: 'fernanda@email.com' 
});

function listarNomes(nomes: string[]): void {
    nomes.forEach((nome: any) => console.log(nome)); // forEach com 'e' minúsculo
}
listarNomes(['Ana', 'Bruno', 'Carlos']);