import React, { Component } from "react";
import { fire, auth } from "../Firebase";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const SignIn = () => {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => {
        //DO API CALL TO BACKENED TO SEND TOKEN TOTHEM
      },
    },
  };

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
};

export default SignIn;
