class e extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }
  name = 'World';
  something;
  constructor() {
    super();
  }
  connectedCallback() {
    this.textContent = `Hello ${this.name}!`;
  }
  attributeChangedCallback(e, t, r) {
    if (t !== r) {
      if ('name' !== e) throw new Error(`Unhandled attribute: ${e}`);
      this.name = r;
    }
  }
}
customElements.define('hello-world', e);
export {e as HelloWorldComponent};
