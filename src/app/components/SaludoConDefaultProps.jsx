/**
 * Componente: SaludoConDefaultProps
 * Propósito:
 *   Saludar usando un nombre que puede ser opcional.
 *
 * Props esperadas:
 *   - nombre: string (opcional)
 *
 * Especificaciones:
 *   - Si no se pasa nombre, usar "Invitado".
 *   - El valor por defecto debe declararse con parámetros JS:
 *        function Componente({ nombre = "Invitado" })
 *     O validación interna.
 *   - Evitar usar defaultProps.
 *
 * Caso:
 *   <SaludoConDefaultProps />
 *   <SaludoConDefaultProps nombre="Kevin" />
 *
 * Solo documentación.
 */
