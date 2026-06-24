// ============================================================
// src/productos.js — Estado y lógica de negocio
// Arrow functions · Destructuring · reduce · Nullish Coalescing
// ISW-521 Programación en Ambiente Web I — UTN
// ============================================================

// Estado privado del módulo (encapsulado, no se exporta directamente)
let listaProductos = [];

/**
 * Factory que crea un producto con valores por defecto seguros.
 * Nullish coalescing (??) protege contra null/undefined en los argumentos.
 * @param {string|null} nombre
 * @param {number|null} precio
 * @returns {{ nombre: string, precio: number }}
 */
export const crearProducto = (nombre, precio) => ({
  nombre: nombre ?? "Producto sin nombre",
  precio: precio ?? 0,
});

/**
 * Agrega un producto a la lista usando destructuring en el parámetro.
 * @param {{ nombre: string, precio: number }} producto
 */
export const agregarProducto = ({ nombre, precio }) => {
  listaProductos.push({ nombre, precio });
};

/**
 * Calcula la suma de todos los precios usando reduce.
 * Reemplaza el for-loop manual y la variable acumuladora explícita.
 * @returns {number}
 */
export const calcularTotal = () =>
  listaProductos.reduce((acumulado, { precio }) => acumulado + precio, 0);

/**
 * Retorna una copia de la lista (inmutabilidad: nadie modifica el estado interno).
 * @returns {Array}
 */
export const obtenerProductos = () => [...listaProductos];

/**
 * Limpia la lista (útil para pruebas o reinicio de estado).
 */
export const limpiarLista = () => {
  listaProductos = [];
};
