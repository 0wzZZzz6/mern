import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateComponent from './components/create.component'
import IndexComponent from './components/index.component'
import EditComponent from './components/edit.component'

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
          <div className="collapse navbar-collapse" id="navbarSupportContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className="nav-link">Index</Link>
              </li>
            </ul>
          </div>
        </nav><br />
        <h2>Welcome to React CRUD</h2> <br />
        <Switch>
          <Route exact path='/create' component={CreateComponent} />
          <Route path='/edit/:id' component={EditComponent} />
          <Route path='/index' component={IndexComponent} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
