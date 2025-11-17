 const ventas = [
      { id: 1, vendedor: { nombre: 'Ana', ciudad: 'Bogotá' }, productos: [{ nombre: 'Manzana', precio: 2000, cantidad: 5 }] },
      { id: 2, vendedor: { nombre: 'Iván', ciudad: 'Medellín' }, productos: [{ nombre: 'Banano', precio: 1500, cantidad: 10 }] },
      { id: 3, vendedor: { nombre: 'Carlos', ciudad: 'Bogotá' }, productos: [{ nombre: 'Pera', precio: 1800, cantidad: 3 }] },
      { id: 4, vendedor: { nombre: 'Ana', ciudad: 'Bogotá' }, productos: [{ nombre: 'Mango', precio: 2500, cantidad: 4 }] },
    ];

    // 🎯 Objetivos

    // Filtra solo las ventas de Bogotá

    // Calcula el total de cada venta (precio × cantidad) 

    // Obtén la suma total de todas las ventas de Bogotá

    // Muestra en consola el nombre del vendedor, producto y total de cada venta

    const ventasBogota = ventas.filter( ({vendedor:{ciudad}}) => ciudad === 'Bogotá');
    const valorVentas = ventas.map( ({productos:[{precio , cantidad}]} ) => precio * cantidad);
    const valorVentaBogota = ventasBogota.reduce((acum , {productos:[{precio , cantidad}]}) => acum + (precio*cantidad) , 0);

    console.log('Ventas realizadas en Bogotá: ' , ventasBogota);
    console.log('Valor individuald e cada venta:  ' , valorVentas);
    console.log(`Total recaudado en ventas en Bogotá: $${valorVentaBogota}`);

    ventas.forEach(v => {
      const {
        vendedor:{nombre:nombreVendedor}, 
        productos:[{nombre:nombreProducto , precio , cantidad}]
      } = v;
      
      console.log(`El vendedor ${nombreVendedor}, vendió ${nombreProducto} por un valor de $${precio*cantidad}`);
    });
