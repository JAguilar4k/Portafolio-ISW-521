// ============================================================
// ProductoCard.js — Componente principal de tarjeta de producto
// Default export: este archivo tiene UN único propósito/componente
// Quien importa elige el nombre que quiera darle
// ============================================================

import { formatearPrecio, capitalizar } from "./utilidades.js";

/**
 * Genera el HTML de una tarjeta de producto.
 * @param {{ nombre: string, precio: number }} producto
 * @returns {string} HTML como string
 */
export default function ProductoCard({ nombre, precio }) {
  return `
    <div class="producto-card">
      <h3>${capitalizar(nombre)}</h3>
      <p class="precio">${formatearPrecio(precio)}</p>
    </div>
  `;
}
