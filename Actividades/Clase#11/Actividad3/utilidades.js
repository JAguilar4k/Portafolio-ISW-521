// ============================================================
// utilidades.js — Funciones de ayuda reutilizables
// Named exports: se exportan VARIAS funciones independientes
// El consumidor elige cuáles importar según sus necesidades
// ============================================================

/**
 * Formatea un número como precio en colones costarricenses.
 * @param {number} precio
 * @returns {string} Ej: "₡15.000"
 */
export const formatearPrecio = (precio) =>
  `₡${precio.toLocaleString("es-CR")}`;

/**
 * Capitaliza la primera letra y pone el resto en minúsculas.
 * @param {string} texto
 * @returns {string}
 */
export const capitalizar = (texto) =>
  texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();

/**
 * Calcula el precio con IVA incluido.
 * @param {number} precio
 * @param {number} tasa - Por defecto 13% (IVA Costa Rica)
 * @returns {number}
 */
export const calcularIVA = (precio, tasa = 0.13) =>
  precio * (1 + tasa);
