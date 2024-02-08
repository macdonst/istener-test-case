import enhance from '@enhance/element'

const ParentText = {
  attrs: ['email', 'errors'],
  init(element) {
  },
  connected() {
    console.log('connected', this)
  },
  disconnected() {
    console.log('disconnected', this)
  },
  render({ html, state }) {
    const { attrs = {}, instanceID = '' } = state
    const { email = '', errors = '' } = attrs
    console.log('render called')

    return html`
<child-text 
  id="${instanceID}-child-text" 
  label='Email' 
  type='email' 
  name='email' 
  value='${email}' 
  errors='${errors}'
></child-text>`
  },
  input(event) {
    console.log('input event', event.target.value)
  }
}

enhance("parent-text", ParentText);
export default ParentText
