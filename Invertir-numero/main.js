const btnInvertir = document.getElementById('btnInvertir');
const inputNumero = document.getElementById('inputNumero');
const outputs = document.getElementById('outputs');

btnInvertir.addEventListener( 'click' , () => {
    const captura = inputNumero.value;
    const valor = parseInt(captura);
    
    if(isNaN(valor)) {   /*Si no es número */
        outputs.innerHTML = '✖ Dato inválido. <br>Recuerda ingresar un número entero';
    }

    else {
        let invertido = captura.split("").reverse().join("");
        outputs.textContent = invertido;
    }
    
    console.log(`Variable captura es de tipo: ${typeof captura}`);
    console.log(`Variable valor es de tipo: ${typeof valor}`);

});
