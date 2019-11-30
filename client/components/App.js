import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import Main from './Main'

// expose redux state as props to consumers
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

// expose action creators & dispatch to consumers
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

// pair our redux'd App to our Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App