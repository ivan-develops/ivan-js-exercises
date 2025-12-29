
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

   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if(!response.ok){
         throw new Error('Error en la petición');
      }

      const usuarios = await response.json();

      mostrarUsuarios(usuarios);

   } catch (error) {
      lista.innerHTML = `Falló API ⛔`;
      console.error('falló la API: ' + error);
   }
}

function mostrarUsuarios(usuariosObtenidos){
console.log(usuariosObtenidos);

   usuariosObtenidos.forEach(usuario => {
      const enlistado = createElement('li');
      
      enlistado.innerHTML = `
      
         ${usuario.name} <br> ${usuario.email}
      `;
      lista.appendChild(enlistado);
   });
}

boton.addEventListener( 'click' ,  obtenerUsuarios);