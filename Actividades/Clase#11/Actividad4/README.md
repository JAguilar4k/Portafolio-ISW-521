# Actividad 4 / Reto Final — Laboratorio con Vite
## Tema 6 | ISW-521 Programación en Ambiente Web I — UTN

## Estructura del proyecto
```
Actividad4/
├── index.html
├── package.json
└── src/
    ├── productos.js   ← estado + lógica (arrow functions, reduce, ??)
    ├── ui.js          ← presentación (template literals, renderizado DOM)
    └── main.js        ← orquestador (importa y ejecuta el flujo)
```

## Cómo ejecutar
```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo con HMR
npm run dev

# 3. Build de producción
npm run build
```

## Comparativa: código spaghetti vs modular
| Aspecto | Antes (2010) | Después (ES6+ / Vite) |
|---|---|---|
| Variables | `var` global | `let`/`const` encapsulado |
| Funciones | `function` tradicional | Arrow functions |
| Acumulación | `for` loop manual | `reduce` |
| Cadenas | Concatenación con `+` | Template literals |
| Valores nulos | Sin protección | `??` (nullish coalescing) |
| Acceso a props | Sin guardia | `?.` (optional chaining) |
| Arquitectura | Un solo archivo | 3 módulos con responsabilidades separadas |

## Conceptos integrados
- ✅ Arrow functions
- ✅ Destructuring en parámetros
- ✅ Spread operator (copia de arrays con `[...lista]`)
- ✅ Optional chaining (`?.`)
- ✅ Nullish coalescing (`??`)
- ✅ Template literals
- ✅ `Array.reduce()`
- ✅ Named exports / imports
- ✅ Arquitectura modular con Vite
