class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        César Ivan Tolentino Garcia.
      </p>`;
  }
}

customElements.define(
  "footer", MiFooter);
