import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import Home from './components/Home/index'
import Login from './components/Login/index'
import NotFound from './components/NotFound/index'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ebank/login" component={Login} />
    <Route exact path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
