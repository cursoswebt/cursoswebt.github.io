class MiProgeso
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<progress max="50">
        Procesando....
      </progress>`;
  }
}

customElements.define(
  "mi-progreso", MiProgeso);