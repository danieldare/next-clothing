import React , { useEffect } from 'react';
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter , Route, Switch , Redirect } from "react-router-dom";
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import Auth from './pages/Auth/Auth';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import { setCurrentUser } from "./redux/User/UserActions";
import { connect } from "react-redux";
import { selectCurrentUser } from './redux/User/UserSelector';
import Checkout from './pages/Checkout/Checkout';

function App(props) {
  const { setCurrentUser } = props;
  useEffect(() => {
    let unsubscribeFromAuth = null;

    //checking for the user auth state then store in firestore and in the application state
   unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });
      });
     }else{
       setCurrentUser(userAuth)
     }
    });
    //UnMounting 
    return () => {
      unsubscribeFromAuth();
    }
  }, [setCurrentUser]);


  return (
    <BrowserRouter>
    <Header/>
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth"  render={() => props.currentUser ? <Redirect to="/" /> : <Auth />} />
          <Route exact path="/checkout" component={Checkout}  />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
