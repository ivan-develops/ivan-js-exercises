// 👉 Imprime:

// Todos los nombres de productos
// El producto cuyo id = 2
// La suma total de los precios

// 🧠 Tu desafío

// Escribe el código para app.js usando:
// import del default
// import de los nombrados
// destructuring
// reduce
// Cuando lo envíes, lo revisamos y avanzamos.

import obtenerNombres, {productos, buscarProducto} from "./productos.js"; 

function sumaPrecios() {
    return productos.reduce((acum,{precio}) => acum + precio, 0);
};

console.log('Lista de productos: ', obtenerNombres());
console.log('Nombre 2do producto: ', buscarProducto(2));
console.log('Suma de precios: ', sumaPrecios());