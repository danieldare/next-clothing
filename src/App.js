import React , { useState , useEffect } from 'react';
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import Auth from './pages/Auth/Auth';
import { auth } from "./firebase/firebase.utils"


const Test = () => (
  <div>Hello from Hat Page</div>
)




function App() {
  const [state, setState ] = useState({
    currentUser: null
  })

  

  useEffect(() => {
    let unsubscribeFromAuth = null;

   unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user)
      setState({
        currentUser: user
      })
    })

    return () => {
      unsubscribeFromAuth();
    }
  }, [])

  return (
    <BrowserRouter>
    <Header currentUser={state.currentUser} />
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
