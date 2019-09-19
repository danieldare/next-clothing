import React from 'react';
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter , Route, Switch } from "react-router-dom";


const Test = () => (
  <div>Hello from Hat Page</div>
)

function App() {
  return (
    <BrowserRouter>
      <Switch >
          <Route exact path="/" component={Homepage} />
          <Route path="/shop/hats" component={Test} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
