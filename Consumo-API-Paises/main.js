
//REST Countries API (gratis, sin API key).

//Devuelve países reales con:
//Nombre, Bandera, Capital, Región, Población.

const btnMostrar = document.getElementById('btnMostrar');
const contenedorPaises = document.getElementById('contenedorPaises');

async function consultarPaises() {

    contenedorPaises.innerHTML='<p>Cargando info...</p><img src="img/loading_gorilla.gif" class="loading_gorilla">'

    try{
        const response = await fetch('https://restcountries.com/v3.1/all');

        if(!response.ok) {
            throw new Error('error petición');
        }
        const paises = await response.json();
        renderizarPaises(paises);

    } catch(error){
        contenedorPaises.innerHTML="<p>❌ Error al cargar países</p>";
    }
}

function renderizarPaises(paises) {
    contenedorPaises.innerHTML="";

    paises.forEach(pais => {
        const card = document.createElement('article');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${pais.flag.svg}" alt="Bandera de ${pais.name.common}" class="bandera">
            <h2 class="nombre">${pais.name.common}</h2>
            <p>${pais.capital}</p>
            <p>${pais.population}</p>
        `;

        contenedorPaises.appendChild(card);
    });

}

btnMostrar.addEventListener( 'click' , consultarPaises );