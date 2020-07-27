import React from "react";
import { fire, auth } from "../Firebase";

const ProfilePage = () => {
  console.log("Profile Page Opened");
  return (
    <span>
      <div>Signed In!</div>
      <button onClick={() => auth.signOut()}>Sign out!</button>
      <h1>Welcome {auth.currentUser.displayName}</h1>
      <img alt="profile picture" src={auth.currentUser.photoURL} />
    </span>
  );
};

export default ProfilePage;
