import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDsfHIybmF5cehXolPNBwGYUimGSMUrwIk",
    authDomain: "next-clothing-db.firebaseapp.com",
    databaseURL: "https://next-clothing-db.firebaseio.com",
    projectId: "next-clothing-db",
    storageBucket: "",
    messagingSenderId: "1026049518436",
    appId: "1:1026049518436:web:1a28b5a0c8facbbb712871",
    measurementId: "G-TBM6Y90LBK"
  
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot)
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',  error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;