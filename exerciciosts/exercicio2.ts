interface LojaTech {
    produto: string;
    valor: number;
    marca:string;
    disponivel:boolean;
}
const meuProduto: LojaTech= {
    produto:'mouse',
    valor: 59.90,
    marca:'philips',
    disponivel: true,

};

function exibirproduto (peca: LojaTech): void { 

    console.log(`produto: ${peca.produto}`);
    console.log(`valor: ${peca.valor}`);
    console.log(`marca: ${peca.marca}`);
    console.log(`disponível: ${peca.disponivel}`);
}

exibirproduto(meuProduto);