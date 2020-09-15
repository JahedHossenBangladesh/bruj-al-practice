import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'

const Login = () => {
const [loggedIn,setLoggedIn] = useContext(UserContext);



const handleGoogleSingIn = () => {

   
    firebase.initializeApp(firebaseConfig);
     var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        const {displayName,email} = result.user;
        const signInUser ={name: displayName,email};
         setLoggedIn(signInUser);
        // console.log();
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });



}



    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSingIn} >Google Sign in</button>
        </div>
    );
};

export default Login;