import { useContext, useRef } from "react";
import AuthContext from "../store/auth-context";
import classes from "./ProfileForm.module.css";
import { useHistory } from "react-router-dom";

const ChangePassword = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value; //the new password is stored in this as the post request needs newpassword as a value

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDnSgIUpGtKbJ0LHIgX1HPbYl62I8HfZcE", //this is used to change password
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/");
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ChangePassword;
