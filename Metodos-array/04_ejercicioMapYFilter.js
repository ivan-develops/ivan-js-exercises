const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Marta", edad: 30 }
];

// Filtrar mayores de edad y obtener solo nombres
const mayores = usuarios.filter(usu => usu.edad>18);
console.log(
    mayores.map(usu => usu.nombre)
);

// find
const encontrar = usuarios.find(usu => usu.edad<18)
console.log('menor de edad: ', encontrar);

/////////

const compras = [
  { producto: "Laptop", precio: 1200 },
  { producto: "Mouse", precio: 25 },
  { producto: "Teclado", precio: 75 }
];

// Calcular total
const total = compras.reduce((acu , num) => num.precio + acu ,0);
console.log("Total compras: ", total);

// Buscar producto específico
const especifico = compras.find(prod => prod.producto === "Teclado");
console.log("Teclado buscado:", especifico );
// Mostrar todos
console.log(`Todos los productos comprados: `)
compras.forEach((prod, indice) =>
    console.log(`${indice+1}. ${prod.producto}`)
);
