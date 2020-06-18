import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            {
            routes.map((route) => (
              <Route
                exact={route.exact}
                key={route.toString()}
                path={route.path}
              >
                {route.component}
              </Route>
            ))
          }
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
