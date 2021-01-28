import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import css from './styles/style.css'
// importing Dashboard
import Dashboard from './components/Dashboard';
// login
import Login from './components/Login';

export default function App() {
  return (
    <Router>
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Login />
    </>
  );
}
