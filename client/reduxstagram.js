import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

// global style
import css from './styles/style.styl'

// components
import App from './components/App'
import PhotoGrid from './components/PhotoGrid'
import Single from './components/Single'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}/>
        <Route path='/view/:postId' component={Single} />
      </Route>
    </Router>
  </Provider>
)


ReactDOM.render(
  router,
  document.getElementById('root')
)