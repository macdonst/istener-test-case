import enhance from '@enhance/element'

const ChildText = {
  attrs: ['errors', 'value'],
  render({ html, state }) {
    const { attrs = {} } = state
    const { label = '', name = '', type = 'text', value = '', errors = '' } = attrs

    return html`
<style>
  :host {
    --_accent: var(--accent, royalblue);
    --_error: var(--error, crimson);
    --_fore: var(--fore, currentColor);
    --_back: var(--back, white);
  }
  :host label input {
    background-color: var(--_back);
    border-color: var(--_fore);
  }
  :host label input:focus {
    transition: outline 0.15s ease-in;
  }
  :host .errors {
    color: var(--_error);
  }
  :host p:not(.errors) {
    color: var(--_fore)
  }
</style>
<label
  class="radius0"
>
  <div class="mbe-3 font-semibold ${errors ? 'errors' : ''}">
    ${label}
  </div>
  <input
    class="p-2 flex-grow si-100 font-light radius0 border-solid mbe-2 border1 select-none ${errors ? 'errors' : ''}"
    id="${name}"
    name="${name}"
    type="${type}"
    placeholder=""
    value="${value}"
    required
   >
   ${errors ? `
  <p class="mbe-3 text-1 errors">
    ❌ ${errors}
  </p>
 ` : ''}
</label>`
  }
}

enhance("child-text", ChildText);
export default ChildText
