let nome: string = "João";
let idade: number = 30;
let Estudante: boolean = true;


let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ["Isa", "Leandro", "Luci"];  
let misto: (string | number)[] = ["Isa", 42, "Leandro", 30];
let misto2: Array<string | number> = ["Isa", 42, "Leandro", 30];

let pessoa: [string, number] = ["Mary", 30];

let id: string | number = "123";
id = 'ABC123';

interface usuario {
    nome: string;
    idade: number;
    email?: string;
}

let novousuario: usuario = {
    nome: "Maria",
    idade: 25,
};


