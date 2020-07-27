import React, { Component } from "react";
import "./App.css";
import { fire, auth } from "./Firebase";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import ProfilePage from "./Components/ProfilePage";
import SignIn from "./Components/SignIn";

class App extends Component {
  state = { isSignedIn: false };

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? <ProfilePage /> : <SignIn />}
      </div>
    );
  }
}

export default App;
