import { dom, element } from 'decca'

import Editor from 'components/editor'

const App = {
  render ({ props }) {
    return <Editor name={props.name}/>
  }
}

// Render the app tree
const render = dom.createRenderer(document.body)
render(<App name='test yay.'/>)
