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
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating user',  error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);


// Used to enter each collection and item into Firestore
//Programatically adds a collection and document to firestore.
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    // returns a promise
    return await batch.commit();
};


export const convertCollectionSnapShotMap = (collections) => {
    const transformCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });   
    
    return transformCollection.reduce((acc , collection)  => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;