
//REST Countries API (gratis, sin API key).

//Devuelve países reales con:
//Nombre, Bandera, Capital, Región, Población.
//Actualmente REST Countries devuelve 400 si no especificas los campos (fields) que quieres recibir.
//Endpoint correcto (con fields):
// https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population

const btnMostrar = document.getElementById('btnMostrar');
const contenedorPaises = document.getElementById('contenedorPaises');

async function consultarPaises() {

    contenedorPaises.innerHTML='<p>Cargando info...</p><img src="img/loading_gorilla.gif" class="loading_gorilla">'

    try{
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region'); 

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
            <img src="${pais.flags.svg}" alt="Bandera de ${pais.name.common}" class="bandera">
            <h3 class="nombre">${pais.name.common}</h3>
            <p>Capital: ${pais.capital}</p>
            <p>Población: ${pais.population.toLocaleString('es-CO')}</p>
            <p>region: ${pais.region}</p>
        `;
        contenedorPaises.appendChild(card);
    });
}

btnMostrar.addEventListener( 'click' , consultarPaises );