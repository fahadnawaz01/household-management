import classes from "./UserProfile.module.css";
import ProfileInputForm from "../forms/profileForm";
import React from "react";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const UserProfile = () => {
  async function addProfileHandler(userDetails) {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "user"), userDetails);
    console.log("Document written with ID: ", docRef.id);
  }

  return (
    <section className={classes.profile}>
      <h1>User Profile</h1>
      <ProfileInputForm onAddProfile={addProfileHandler} />
    </section>
  );
};

export default UserProfile;
