import React , { useState , useEffect } from 'react';
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter , Route, Switch } from "react-router-dom";
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import Auth from './pages/Auth/Auth';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"

function App() {
  const [ state, setState ] = useState({
    currentUser: null
  });

  useEffect(() => {
    let unsubscribeFromAuth = null;

    //checking for the user auth state then store in firestore and in the application state
   unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        setState({
          id: snapShot.id,
          ...snapShot.data()
        })
      })

      
     }else{
       setState({
         currentUser: userAuth
       })
     }
     
     console.log(state)
    });
    //UnMounting 
    return () => {
      unsubscribeFromAuth();
    }
  }, [state.currentUser]);


  
  return (
    <BrowserRouter>
    {console.log(state.currentUser)}
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
