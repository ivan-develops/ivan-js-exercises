		const ventas = [
		  { dia: 'Lunes', valor: 120000, vendedor: 'Ana' },
		  { dia: 'Martes', valor: 80000, vendedor: 'Iván' },
		  { dia: 'Miércoles', valor: 95000, vendedor: 'Ana' },
		  { dia: 'Jueves', valor: 70000, vendedor: 'Carlos' },
		  { dia: 'Viernes', valor: 130000, vendedor: 'Iván' },
		];
		
		// 🎯 Objetivos
		
		// Filrar solo las ventas mayores o iguales a $90.000.
		
		// Crear un nuevo arreglo con los nombres de los vendedores de esas ventas, en mayúsculas.
		
		// Calcular el total vendido entre esas ventas filtradas.
		
		const mayoresVentas = ventas.filter(v => v.valor>=90000);
		const mejoresVendedores = mayoresVentas.map(vend => vend.vendedor.toUpperCase());
		const total = mayoresVentas.reduce((acum, val) => acum+val.valor, 0);

		console.log('Vendedores con ventas superiores a $90.000 durante la semana: ');

		mayoresVentas.forEach(venta => {
			console.log(venta.vendedor + ', el día ' + venta.dia + ' por un valor de $' + venta.valor);
		});
		console.log('TOTAL de estas ventas = $' + total);