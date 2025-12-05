/**
 * Componente: PerfilConObjeto
 * Propósito:
 *   Recibir un objeto "usuario" y mostrar nombre y lista de hobbies.
 *
 * Props esperadas:
 *   - usuario: {
 *         nombre: string,
 *         hobbies: string[]
 *     }
 *
 * Especificaciones:
 *   - Mostrar usuario.nombre
 *   - Mostrar hobbies separados por comas.
 *   - Si hobbies.length === 0 → mostrar "Sin hobbies".
 *
 * Casos:
 *   <PerfilConObjeto usuario={{ nombre: "Kevin", hobbies: ["Gym", "Programar"] }} />
 *   <PerfilConObjeto usuario={{ nombre: "Ana", hobbies: [] }} />
 *
 * Solo documentación, sin JSX.
 */
