// ============================================================
// src/main.js — Orquestador principal
// Importa los módulos y ejecuta el flujo completo de la app
// ISW-521 Programación en Ambiente Web I — UTN
// ============================================================

import {
  crearProducto,
  agregarProducto,
  calcularTotal,
} from "./productos.js";

import {
  mostrarProductoAgregado,
  mostrarTotal,
  renderizarLista,
  renderizarTotal,
} from "./ui.js";

// --- Datos de ejemplo ---
// crearProducto aplica nullish coalescing internamente para los defaults
const productosIniciales = [
  crearProducto("Teclado Mecánico", 15000),
  crearProducto("Mouse Inalámbrico", 8500),
  crearProducto("Monitor 24\"", 120000),
  crearProducto(null, null), // ← los defaults actúan: "Producto sin nombre", 0
];

// --- Flujo principal ---
productosIniciales.forEach((producto) => {
  agregarProducto(producto);
  mostrarProductoAgregado(producto); // log en consola
});

const total = calcularTotal();
mostrarTotal(total); // log en consola

// Renderizar en el DOM (solo funciona en el navegador con Vite)
renderizarLista();
renderizarTotal(total);
