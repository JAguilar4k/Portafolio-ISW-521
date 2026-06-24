# Actividad 2 — Depuración de Respuesta de API Incompleta
## Tema 4 | ISW-521 Programación en Ambiente Web I — UTN

## Conceptos aplicados
| Concepto | Uso en el código |
|---|---|
| **Optional Chaining** (`?.`) | Acceder a `perfil?.direccion?.ciudad` sin riesgo de TypeError |
| **Nullish Coalescing** (`??`) | Proveer valores por defecto solo cuando el valor es `null` o `undefined` |

## ¿Por qué `||` falla con descuento = `0`?
`||` evalúa como falsy cualquier valor: `0`, `""`, `false`, `null`, `undefined`.  
Esto provoca que un descuento válido de **0%** sea silenciosamente reemplazado por **10**.  
`??` solo activa el fallback ante `null` o `undefined`, respetando el `0` como valor intencional.

## Cómo ejecutar
```bash
node api-debug.js
```
