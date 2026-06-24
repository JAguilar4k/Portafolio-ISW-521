# Actividad 3 — Arquitectura Modular
## Tema 5 | ISW-521 Programación en Ambiente Web I — UTN

## Estructura del proyecto
```
Actividad3/
├── index.html       ← punto de entrada HTML con <script type="module">
├── main.js          ← orquestador (importa todo)
├── ProductoCard.js  ← default export (componente único)
└── utilidades.js    ← named exports (varias funciones de ayuda)
```

## Decisiones de diseño
| Archivo | Tipo de export | Justificación |
|---|---|---|
| `utilidades.js` | **Named exports** | Contiene múltiples funciones independientes; el consumidor importa solo lo que necesita |
| `ProductoCard.js` | **Default export** | Tiene un único propósito: el componente; semánticamente representa "lo que este módulo es" |

## Cómo ejecutar
Abrir `index.html` con un servidor local (no funciona con `file://` por restricciones CORS de módulos).

```bash
# Opción 1: extensión Live Server en VS Code
# Opción 2: con Node.js
npx serve .
```
