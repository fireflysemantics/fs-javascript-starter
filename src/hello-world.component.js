/**
 *  @category WebComponent
 *
 * Hello World Web Component
 * that renders a greeting.
 */
export class HelloWorldComponent extends HTMLElement {
    static get observedAttributes() {
      return ['name'];
    }
  
    /**
     * The name to greet
     * @defaultValue World
     */
    name = 'World';
    something
    /**
     * Initializes the name property to `World`.
     */
    constructor() {
      super();
      //    this.name = 'World';
    }
  
    /**
     * Sets the component inner
     * html to the greeting.
     */
    connectedCallback() {
      this.textContent = `Hello ${this.name}!`;
    }
  
    //========================================
    // attribute change callback
    //========================================
    attributeChangedCallback(
      property,
      oldValue,
      newValue
    ) {
      if (oldValue === newValue) return;
      switch (property) {
        case 'name':
          this.name = newValue;
          break;
        default:
          throw new Error(`Unhandled attribute: ${property}`);
      }
    }
  }
  customElements.define('hello-world', HelloWorldComponent);