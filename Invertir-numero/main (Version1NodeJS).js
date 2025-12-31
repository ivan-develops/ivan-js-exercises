// let numeroEntero = 0;

console.log(' //   Invertir dígitos de número entero   //');

//* importamos el MÓDULO readline:
const readline = require('readline');

//* Crear interfaz de lectura/escritura:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//* MÉTODO question() para hacer una pregunta y recibir la respuesta: 
rl.question('Ingrese un número entero --> ' , (entrada)=>{
    
    const numero = parseInt(entrada);

    if (isNaN(numero)) {
        console.log("No escribiste un número válido ❌");
    }

    else {    
        console.log(`El número ingresado es: ${numero}`);
        console.log(`-------------------`);
        const invertido = entrada.split("").reverse().join("");
        console.log(`Los digitos invertidos del número es ${invertido}`);
    
        console.log(`Variable repuesta es de tipo ${typeof entrada}`);
        console.log(`Variable numero es de tipo ${typeof numero}`);
    }

    rl.close(); // Cierra la interfaz una vez que recibes la respuesta
})