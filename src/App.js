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
import { createStructuredSelector } from 'reselect';
// import { selectCollectionsForPreview } from './redux/Shop/ShopSelector';


function App(props) {
  const { setCurrentUser , collectionsArray} = props;
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
       setCurrentUser(userAuth);
       //The collectionArray is mapped over to return just the need details from the collections which is the { title , items}
      //  addCollectionAndDocument("collections", collectionsArray.map(({ title, items }) => ({title, items})));
     }
    });
    //UnMounting 
    return () => {
      unsubscribeFromAuth();
    }
  }, [setCurrentUser, collectionsArray]);

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
};

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
