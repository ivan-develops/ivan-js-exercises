export const productos = [
  { id: 1, nombre: "Manzana", precio: 2000 },
  { id: 2, nombre: "Banano", precio: 1500 },
  { id: 3, nombre: "Mango", precio: 2500 }
];

export function buscarProducto(id) {
  return productos.find(p => p.id === id);
}

export default function obtenerNombres() {
  return productos.map(p => p.nombre);
}