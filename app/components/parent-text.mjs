import enhance from '@enhance/element'

const ParentText = {
  attrs: [ 'email', 'errors' ],
  init(element) {
    this.textInput = element.querySelector('input')
    this.input = this.input.bind(this)
  },
  connected() {
    console.log('connected', this.input)
    this.textInput.addEventListener('input', this.input)
  },
  disconnected() {
    console.log('disconnected')
    this.textInput.removeEventListener('input', this.input)
  },
  render({ html, state }) {
    const { attrs = {} } = state
    const { email = '', errors = '' } = attrs
    console.log('render called')

    return html`
<child-text label='Email' type='email' name='email' value='${email}' errors='${errors}'></child-text>`
  },
  input(event) {
    console.log('blur event', event.target.value)
  }
}

enhance("parent-text", ParentText);
export default ParentText
