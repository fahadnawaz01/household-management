import React, { useState, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  //we create this context so that we can call this context and store data in it so that the because of reloading the page the state doesnt lose its track
  token: "",
  uid: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token"); //we stored the token in local browser so we will get it from token

  return {
    token: storedToken, //or else we return token and remaining time
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken(); //the token and expiration time is stored in token data

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token; //the token is stored here
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null); //this function is used in logout button
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("uid");
    localStorage.removeItem("profileSet");
    console.log("uid removed");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, uid) => {
    //this function is used in login button
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("uid", uid);
    console.log(localStorage.getItem("uid"));
  };

  const contextValue = {
    token: token, //all of the values are stored in context value so that it can be used by other components
    uid: localStorage.getItem("uid"),
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
