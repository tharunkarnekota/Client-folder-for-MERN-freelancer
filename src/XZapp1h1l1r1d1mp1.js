//just for my reference, main file is app.js

import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Dashboard from './Dashboard'
import Myprofile from './Myprofile'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/myprofile' exact component={Myprofile} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
