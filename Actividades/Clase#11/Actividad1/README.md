# Actividad 1 — Refactorización de Función de Configuración
## Tema 3 | ISW-521 Programación en Ambiente Web I — UTN

## Conceptos aplicados
| Concepto | Uso en el código |
|---|---|
| **Destructuring** | Extraer `nombre` y `tipo` directamente en la firma de la función |
| **Rest parameter** (`...banderas`) | Capturar banderas opcionales sin usar el objeto `arguments` |
| **Spread operator** | Crear un objeto nuevo sin mutar el original |
| **Template literals** | Reemplazar la concatenación con `+` por strings interpolados |

## Cómo ejecutar
```bash
node configuracion.js
```

## Anti-patrones eliminados
- ❌ Mutación directa: `config.total = ...`
- ❌ Uso de `arguments` (arcaico y no disponible en arrow functions)
- ❌ Concatenación con `+`
- ❌ Acceso manual a propiedades: `var nombre = config.nombre`
