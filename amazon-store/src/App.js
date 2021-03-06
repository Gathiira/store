import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
     <Router>
       <div>
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          {/* default route */}
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
       </div>
     </Router>
    </div>
  );
}

export default App;
