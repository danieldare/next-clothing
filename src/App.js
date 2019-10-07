import React from 'react';
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';


const Test = () => (
  <div>Hello from Hat Page</div>
)

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
