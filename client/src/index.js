import React from "react";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { render } from "react-dom";                 // add this

render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENTID}>
    <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);