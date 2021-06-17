import {
  cargaRoles
} from "../js/seguridad.js";
import {
  getAuth
} from "../lib/auth.js";
import {
  muestraError
} from "../lib/util.js";

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
        <li>
          <a href="index.html">
            Inicio</a>
        </li>
      </ul>`;
    this.ul =
      this.querySelector("ul");
    getAuth().onAuthStateChanged(
      usuario => this.
        cambiaUsuario(usuario),
      muestraError);
  }

  async cambiaUsuario(usu) {
    if (usu && usu.email) {
      let html = "";
      const roles =
        await cargaRoles(
          usu.email);

      if (roles.has("Cliente")) {
        html +=
          `<li>
            <a href=
              "comentarios.html">Comentarios/Chat</a>
          </li>`;
      }
      if (roles.has(
        "Administrador")) {
        html +=
          `<li>
            <a href=
"cursos.html">Cursos</a>
          </li>
          <li>
            <a href=
      "perfil.html">Usuarios</a>
          </li>`;
      }
      this.ul.innerHTML += html;
    }
  }
}

customElements.define(
  "mi-nav", MiNav);