import { dom, element } from 'decca'
import debounce from 'lodash-amd/debounce'

import configureStore from 'store'
import Editor from 'components/editor'

// Create a Redux store to handle all UI actions and side-effects
let store = configureStore()

const App = {
  render ({ context, props }) {
    return <Editor name={context.editor.counter}/>
  }
}

// Create an app that can turn vnodes into real DOM elements
var render = dom.createRenderer(document.body, store.dispatch)
var update = () => { render(<App name='test yay.'/>, store.getState()) }
store.subscribe(debounce(update, 0))
update()

// Render the app tree
render(
  <App name='test yay.'/>,
  store.getState()
)
