import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../components/store/auth-context";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const [isloading] = useState(false);
  const history = useHistory(); //it is used to redirect to some page when certaina action is performed refer line 67
  const authCtx = useContext(AuthContext); //AuthContext is called using AuthContext and stored in object authCtx.

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState); //this function is called when the switch to login or signup buttton is clicked and the true or false is changed based on the previous state
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (!isLogin) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          enteredEmail,
          enteredPassword
        );
        console.log(user);
      } catch (error) {
        console.error(error.message);
      }
    }
    if (isLogin) {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          enteredEmail,   
          enteredPassword
        );
        authCtx.login(user._tokenResponse.idToken, user._tokenResponse.localId);
        history.replace("/");
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {isloading && <p>Loading....</p>}
          {!isloading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler} //whenever this button is clicked the swtichauthmodehandler function is called
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
