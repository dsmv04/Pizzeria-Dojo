function pizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes) {
    let pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoCorteza = tipoSalsa;
    pizza.quesos = quesos;
    pizza.ingredientes = ingredientes;
    return pizza;
}

let pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"],
                                                        ["pepperoni", "salchicha"]);
console.log(pizza1);

let pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"],
                                                     ["champiñones", "aceitunas", "cebolla"]);
console.log(pizza2);

let tipoCorteza = [
    "estilo Chicago",
    "lanzada a mano",
    "a la piedra",
    "doble queso",
    "vegana",
    "sin gluten"
];

let tipoSalsa = [
    "tradicional",
    "marinara",
    "bbq",
    "salsa blanca",
    "salsa de ajo",
    "salsa picante"
];

let quesos = [
    "mozzarella",
    "cheddar",
    "feta",
    "queso suizo",
    "queso azul",
    "queso de cabra",
    "parmesano",
    "queso vegano"
];

let ingredientes = [
    "pepperoni",
    "salchicha",
    "pollo",
    "maiz",
    "aceitunas",
    "pimientos",
    "cebolla",
    "champiñones",
    "anchoas"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    let i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    let pizza = {};
    pizza.tipoCorteza = randomPick(tipoCorteza);
    pizza.tipoSalsa = randomPick(tipoSalsa);
    pizza.quesos = randomPick(quesos);
    pizza.ingredientes = [];

    for(let i=0; i<randomRange(4, 0); i++) {
        pizza.ingredientes.push(randomPick(ingredientes));
    }
    return pizza;
}

console.log(randomPizza());