import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// importing Dashboard
import Dashboard from './components/Dashboard';
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
      <h1>hallo</h1>
      <Login />
    </>
  );
}
