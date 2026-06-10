# FZJ80 · Explorador de Restauración 3D

Experiencia web interactiva para visualizar el estado de restauración de un Toyota Land Cruiser 80 Series FZJ80 de 1997.

## Funciones

- Modelo 3D procedural y explorable con Three.js.
- Rotación, zoom y vistas 3/4, frontal, lateral y superior.
- Modo Rayos-X para inspeccionar chasis, ejes, transmisión y piezas internas.
- Ocho componentes seleccionables con etiquetas conectadas al modelo.
- Inspector con referencia OEM, ubicación, responsable, ETA, nota y progreso.
- Filtros por estado y navegación por sistema.
- Diseño adaptable para escritorio, tableta y móvil.

## Código de estados

| Color | Estado |
|---|---|
| Verde | Reemplazado e instalado |
| Rojo | Faltante |
| Amarillo | En instalación |
| Azul | Solicitado y en tránsito |

## Ejecución

Abre `index.html` directamente con doble clic. No requiere servidor local.

Three.js y OrbitControls están integrados dentro de `app.js`, por lo que toda la funcionalidad 3D trabaja sin conexión. Las tipografías externas son opcionales; si no hay Internet se utilizan las fuentes de respaldo del sistema.

## Archivos

- `index.html`: estructura de la interfaz.
- `style.css`: sistema visual y diseño adaptable.
- `app.js`: escena 3D, piezas, interacción, filtros y controles.
- `assets/`: imágenes de referencia del proyecto original.
- `backup-original-20260610-151055/`: copia previa a la implementación 3D.

## Diseño

La pantalla fue diseñada con Stitch MCP en el proyecto privado `FZJ80 3D Restoration Explorer`, conservando el lenguaje visual verde oliva, técnico y mecánico de la interfaz original.
