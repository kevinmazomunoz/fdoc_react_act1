/**
 * Componente: ContenedorRenderProp
 * Propósito:
 *   Aceptar:
 *      - contenido: elemento React
 *        O
 *      - render: función que retorna un elemento React
 *
 * Props esperadas:
 *   - contenido?: ReactNode
 *   - render?: () => ReactNode
 *
 * Especificaciones:
 *   - Si se envía "contenido", mostrarlo directamente.
 *   - Si se envía "render", ejecutar la función y mostrar su retorno.
 *   - Elegimos el patrón "render prop" porque es más flexible.
 *
 * Casos:
 *   <ContenedorRenderProp contenido={<h2>Hola</h2>} />
 *   <ContenedorRenderProp render={() => <p>Generado dinámicamente</p>} />
 *
 * Solo documentación.
 */
