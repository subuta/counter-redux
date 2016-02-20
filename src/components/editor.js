import { element } from 'decca'

// Dispatch an action when the button is clicked
let log = dispatch => event => {
  dispatch({
    type: 'CLICKED'
  })
}

// Define a state-less component
const Editor = {
  render: ({ props, children, dispatch }) => {
    return <button onClick={log(dispatch)}>{props.name}</button>
  }
}

// Render the app tree
export default Editor
