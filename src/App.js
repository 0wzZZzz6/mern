import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

import CreateComponent from './components/create.component'
import IndexComponent from './components/index.component'
import EditComponent from './components/edit.component'

const App = () => {
  const businessData = []

  const [business, setBusiness] = useState(businessData)

  const addBusiness = data => {
    data.businessId = randomId()
    console.log(data)
    setBusiness([
      ...business,
      data
    ])

    axios.post('http://localhost:4000/business/add', data)
      .then(res => console.log(res.data))
  }

  const updateBusiness = (id, business) => {
    console.log(`${id} - ${business}`)
    axios.post(`http://localhost:4000/business/update/${id}`, business)
    .then(res => console.log(res.data));
  }

  const randomId = () => {
    return '_' + Math.random().toString(36).substr(2, 9)
  }

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
        <h2>Welcome to React CRUD Tutorial</h2> <br />
        <Switch>
          <Route exact path='/create' render={(props) => <CreateComponent {...props} addBusiness={addBusiness} />} />
          <Route path='/edit/:id' render={(props) => <EditComponent {...props} updateBusiness={updateBusiness} />} />
          <Route path='/index' component={IndexComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
