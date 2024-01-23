/* eslint-disable import/extensions */
import './App.css'

import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Jobs from './components/Jobs'

import ProtectRoutes from './components/ProtectedRoutes'
import JobDetails from './components/JobDetails'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectRoutes exact path="/" component={Home} />
    <ProtectRoutes exact path="/jobs" component={Jobs} />
    <ProtectRoutes exact path="/jobs/:id" component={JobDetails} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
