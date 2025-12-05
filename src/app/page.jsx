/**
 * Página principal de demostración
 * --------------------------------
 * Esta página solo contiene comentarios que explican
 * cómo se usarían los componentes si estuvieran implementados.
 *
 * Ejemplos de uso previstos:
 *
 * <SaludoBasico nombre="Kevin" entusiasta={true} />
 * <SaludoBasico nombre="Maria" />
 *
 * <SaludoDesestructurado nombre="Kevin" edad={17} />
 *
 * <PerfilConObjeto usuario={{ nombre: "Kevin", hobbies: ["programar", "gym"] }} />
 * <PerfilConObjeto usuario={{ nombre: "Luis", hobbies: [] }} />
 *
 * <BotonConCallback texto="Haz clic" onClick={() => alert("Clic!")} />
 *
 * <ContenedorRenderProp contenido={<p>Contenido fijo</p>} />
 * O usando render props:
 * <ContenedorRenderProp render={() => <h2>Contenido dinámico</h2>} />
 *
 * <CajaChildren>
 *     <h1>Título</h1>
 *     <p>Este es el contenido dentro de children.</p>
 * </CajaChildren>
 *
 * <SaludoConDefaultProps />
 * <SaludoConDefaultProps nombre="Kevin" />
 *
 * --------------------------------------------
 * Pruebas manuales que debería verificar:
 *
 * 1. SaludoBasico: muestra "Hola, Kevin" y si entusiasta=true añade emoción extra.
 * 2. SaludoDesestructurado: muestra nombre y edad con desestructuración.
 * 3. PerfilConObjeto: si hobbies está vacío, muestra "Sin hobbies".
 * 4. BotonConCallback: al hacer clic debería ejecutar onClick.
 * 5. ContenedorRenderProp: debe renderizar contenido o el resultado de una función.
 * 6. CajaChildren: debe envolver cualquier contenido pasado como children.
 * 7. SaludoConDefaultProps: si no recibe nombre → mostrar "Invitado".
 *
 * Esta página NO tiene JSX real. Solo documentación.
 */

export default function Page() {
  return (
    <h1>Documentación lista ✔️</h1>
  );
}
