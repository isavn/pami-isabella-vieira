
const cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Ouro Preto', 'Salvador'];

function listarCidades(listaDeCidades: string[]): void {
  cidades.forEach(cidades=> console.log(cidades));
}

listarCidades(cidades);