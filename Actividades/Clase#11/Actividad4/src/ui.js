// ============================================================
// src/ui.js — Presentación y mensajes
// Solo template literals · Sin lógica de negocio
// ISW-521 Programación en Ambiente Web I — UTN
// ============================================================

import { obtenerProductos } from "./productos.js";

/**
 * Imprime en consola la confirmación de un producto agregado.
 * @param {{ nombre: string, precio: number }} producto
 */
export const mostrarProductoAgregado = ({ nombre, precio }) => {
  console.log(`✅ Agregado: ${nombre} — ₡${precio.toLocaleString("es-CR")}`);
};

/**
 * Imprime en consola el total del carrito.
 * @param {number} total
 */
export const mostrarTotal = (total) => {
  console.log(`🛒 Total del carrito: ₡${total.toLocaleString("es-CR")}`);
};

/**
 * Renderiza la lista completa de productos en el DOM.
 * Usa optional chaining y ?? para manejar datos incompletos con seguridad.
 */
export const renderizarLista = () => {
  const productos = obtenerProductos();
  const contenedor = document.getElementById("lista-productos");

  // Optional chaining: si el contenedor no existe en el DOM, sale sin error
  if (!contenedor) return;

  contenedor.innerHTML = productos
    .map(
      ({ nombre, precio }) => `
        <li class="producto-item">
          <span class="nombre">${nombre ?? "Sin nombre"}</span>
          <strong class="precio">₡${precio?.toLocaleString("es-CR") ?? "0"}</strong>
        </li>`
    )
    .join("");
};

/**
 * Muestra el total formateado en el elemento del DOM.
 * @param {number} total
 */
export const renderizarTotal = (total) => {
  const elementoTotal = document.getElementById("total");
  if (!elementoTotal) return;
  elementoTotal.textContent = `Total: ₡${total.toLocaleString("es-CR")}`;
};
