
const boton = document.getElementById('cargar');
const lista = document.getElementById('lista');

// boton.addEventListener( 'click' , async () => {
//    const response = await fetch('https://jsonplaceholder.typicode.com/users');
//    const usuarios = await response.json();

//    lista.innerHTML = ``;
//    console.log(response)
//    console.log(usuarios);

//    usuarios.forEach(usuario => {
//       const item = document.createElement('li');
//       item.textContent= `
//          Nombre: ${usuario.name} Correo: ${usuario.email}
//       `;
//       lista.appendChild(item);
//    });
// });


async function obtenerUsuarios() {

   lista.innerHTML = `🧨 Cargando...`;
   boton.disabled = true; // Deshabilita el botón (para evitar seleccionar varias veces)

   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if(!response.ok){
         throw new Error('Error en la petición: ' + response.status + ' ' + response.statusText);
      }

      const usuarios = await response.json();

      mostrarUsuarios(usuarios);

   } catch (error) {
      lista.innerHTML = `Falló API ⛔`;
      console.error('Falló la API: ' + error);
   } finally {
      boton.disabled = false;
   }

}

function mostrarUsuarios(usuariosObtenidos){

   lista.innerHTML = ``;

   usuariosObtenidos.forEach(usuario => {
      const enlistado = document.createElement('li');
      
      enlistado.innerHTML = `
         ${usuario.name} <br> <span class="email">${usuario.email}</span>
      `;
      lista.appendChild(enlistado);
   });
}

boton.addEventListener( 'click' ,  obtenerUsuarios);