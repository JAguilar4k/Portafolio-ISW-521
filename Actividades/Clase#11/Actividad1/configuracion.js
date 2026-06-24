// ============================================================
// ACTIVIDAD 1 — Refactorización de Función de Configuración
// Tema 3: Template Literals, Destructuring, Spread, Rest
// ISW-521 Programación en Ambiente Web I — UTN
// ============================================================

// ❌ CÓDIGO VIEJO (conservado como referencia)
function procesarConfiguracionVieja(config) {
  var nombre = config.nombre;
  var tipo = config.tipo;
  var totalOpciones = arguments.length - 1;
  config.total = totalOpciones; // Mutación directa ⚠️
  var mensaje = "Resumen de " + nombre + " (" + tipo + ")";
  console.log(mensaje);
  return config;
}

// ✅ CÓDIGO REFACTORIZADO
// - Destructuring en la firma: extrae solo nombre y tipo del objeto
// - Rest parameter: captura banderas opcionales sin usar arguments
// - Spread operator: crea objeto nuevo sin mutar el original
// - Template literal: reemplaza la concatenación con +
function procesarConfiguracion({ nombre, tipo }, ...banderasOpcionales) {
  const total = banderasOpcionales.length;

  const mensaje = `Resumen de ${nombre} (${tipo})`;
  console.log(mensaje);

  // Retorna un objeto NUEVO; el original no se toca
  return { nombre, tipo, total };
}

// --- Ejemplos de uso ---
const config = { nombre: "AppConfig", tipo: "producción" };

const resultado = procesarConfiguracion(config, "debug", "verbose");
console.log("Resultado:", resultado);
// → { nombre: 'AppConfig', tipo: 'producción', total: 2 }

console.log("Original intacto:", config);
// → { nombre: 'AppConfig', tipo: 'producción' }  ← sin mutar

const sinBanderas = procesarConfiguracion({ nombre: "DBConfig", tipo: "desarrollo" });
console.log("Sin banderas:", sinBanderas);
// → { nombre: 'DBConfig', tipo: 'desarrollo', total: 0 }
