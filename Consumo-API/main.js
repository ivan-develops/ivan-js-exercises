const boton = document.getElementById('cargar');
const lista = document.getElementById('lista');

boton.addEventListener( 'click' , async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const usuarios = await response.json();

   lista.innerHTML = ``;
   console.log(response)
   console.log(usuarios);

   usuarios.forEach(usuario => {
      const item = document.createElement('li');
      item.textContent= `
         Nombre: ${usuario.name} Correo: ${usuario.email}
      `;
      lista.appendChild(item);
   });
});
