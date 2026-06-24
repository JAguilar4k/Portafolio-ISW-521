// ============================================================
// ACTIVIDAD 2 — Depuración de Respuesta de API Incompleta
// Tema 4: Optional Chaining (?.) y Nullish Coalescing (??)
// ISW-521 Programación en Ambiente Web I — UTN
// ============================================================

// ❌ CÓDIGO PROBLEMÁTICO (conservado como referencia)
function procesarRespuestaVieja(perfil) {
  var ciudad = perfil.direccion.ciudad; // 💥 TypeError si direccion es undefined
  var descuento = perfil.descuento || 10; // 🐛 Bug: si descuento=0, usa 10 igual
  console.log(ciudad, descuento);
}

// ✅ CÓDIGO CORREGIDO
function procesarRespuesta(perfil) {
  // Optional chaining (?.) cortocircuita si cualquier eslabón es null/undefined
  // Nullish coalescing (??) activa el fallback SOLO si el valor es null o undefined
  const ciudad    = perfil?.direccion?.ciudad ?? "Ciudad no disponible";
  const descuento = perfil?.descuento ?? 10;

  console.log(`Ciudad: ${ciudad} | Descuento: ${descuento}%`);
}

// ---------------------------------------------------------------
// ¿Por qué || sería un error con descuento = 0?
// ---------------------------------------------------------------
// El operador || activa el fallback ante CUALQUIER valor falsy
// (0, "", false, null, undefined). Esto significa que un descuento
// legítimo de 0% sería reemplazado incorrectamente por 10.
// El operador ?? solo activa el fallback ante null o undefined,
// respetando el 0 como valor válido.
// ---------------------------------------------------------------

// --- Pruebas ---
console.log("--- Caso 1: datos completos con descuento 0 ---");
procesarRespuesta({ direccion: { ciudad: "San José" }, descuento: 0 });
// ✅ Ciudad: San José | Descuento: 0%   ← el 0 es respetado

console.log("--- Caso 2: direccion null ---");
procesarRespuesta({ direccion: null, descuento: null });
// ✅ Ciudad: Ciudad no disponible | Descuento: 10%

console.log("--- Caso 3: objeto vacío ---");
procesarRespuesta({});
// ✅ Ciudad: Ciudad no disponible | Descuento: 10%

console.log("--- Caso 4: perfil con ciudad y descuento normales ---");
procesarRespuesta({ direccion: { ciudad: "Alajuela" }, descuento: 25 });
// ✅ Ciudad: Alajuela | Descuento: 25%

// --- Demostración del bug con || ---
console.log("\n--- Demostración del bug de || con descuento = 0 ---");
const descuentoConOR  = 0 || 10;  // ❌ Retorna 10 (0 es falsy)
const descuentoConNULL = 0 ?? 10; // ✅ Retorna 0  (0 NO es null/undefined)
console.log(`|| produce: ${descuentoConOR}`);   // 10 ← incorrecto
console.log(`?? produce: ${descuentoConNULL}`); // 0  ← correcto
