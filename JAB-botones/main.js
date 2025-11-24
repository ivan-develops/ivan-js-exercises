const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const contenido = document.getElementById('contenido');

const borrar = ()=> contenido.innerHTML='';


btn1.addEventListener( 'click' , ()=>{
    borrar();
    contenido.innerHTML = 'LO HIZO BTN #1';
});

btn2.addEventListener( 'click' , ()=> {
    borrar();
    contenido.innerHTML = '<img src="../CrazyDogDeveloper.jpeg" alt "perro programador">';
});

btn3.addEventListener( 'click' , ()=> {
    const btnFake = document.createElement('button');
    btnFake.textContent='FAKE BTN'
    contenido.appendChild(btnFake);
});

btn4.addEventListener( 'click' , borrar);
