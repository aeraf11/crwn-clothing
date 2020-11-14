import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config =  {
    apiKey: "AIzaSyDkAQ2sCYPssJgAwIx2Q0lKwk4bboFCqRo",
    authDomain: "crwn-db-29ad4.firebaseapp.com",
    databaseURL: "https://crwn-db-29ad4.firebaseio.com",
    projectId: "crwn-db-29ad4",
    storageBucket: "crwn-db-29ad4.appspot.com",
    messagingSenderId: "265704953826",
    appId: "1:265704953826:web:71459e875fcff1dd6b8bbb",
    measurementId: "G-DLH005QBDC"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        }
        catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;






