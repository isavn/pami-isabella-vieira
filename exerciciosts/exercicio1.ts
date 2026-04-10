
const cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Ouro Preto', 'Salvador'];

function listarCidades(listaDeCidades: string[]): void {
    for (let i: number = 0; i < listaDeCidades.length; i++) {
        console.log("Cidade " + (i + 1) + ": " + listaDeCidades[i]);
    }
}

listarCidades(cidades);