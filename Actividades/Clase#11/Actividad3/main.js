// ============================================================
// main.js — Orquestador principal
// Importa desde utilidades (named) y ProductoCard (default)
// ============================================================

// Named import: llaves {} porque son exports nombrados
import { formatearPrecio, calcularIVA } from "./utilidades.js";

// Default import: sin llaves, el nombre lo elige el importador
import ProductoCard from "./ProductoCard.js";

// --- Flujo principal ---
const producto = { nombre: "teclado mecánico", precio: 45000 };

const precioConIVA = calcularIVA(producto.precio);
console.log(`Precio con IVA: ${formatearPrecio(precioConIVA)}`);

// Renderizar en el DOM
document.getElementById("app").innerHTML = ProductoCard(producto);
