import React from 'react'
import Core from './screens/Core/Core'
import './App.css';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Core} />
      </Switch>
    </div>
  );
}

export default App;
