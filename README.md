# Actividad 10 - Feria Artesanal de Ñuble

## Objetivo
Construir un catálogo interactivo con Vue.js integrando directivas, componentes y reactividad.

## Conceptos aplicados
- **v-model**: Sincronización del input de búsqueda y el select de categorías.
- **v-if / v-else**: Condicionales para mostrar el mensaje de "sin resultados", la grilla o el mensaje de catálogo oculto.
- **v-show**: Alternar la visibilidad de todo el bloque del catálogo.
- **v-for**: Renderizado automático de los items del `<select>` y de las tarjetas `<ProductoCard>`.
- **computed**: Cálculo reactivo para extraer categorías únicas y generar la lista filtrada.
- **props y eventos**: Comunicación entre `App.vue` (padre) y los componentes `ProductoCard.vue` / `ProductoModal.vue` (hijos).

## Ejecutar
```bash
npm install
npm run dev