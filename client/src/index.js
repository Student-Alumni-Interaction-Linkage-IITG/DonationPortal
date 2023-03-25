import React from "react";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { render } from "react-dom";                 // add this

render(
  <GoogleOAuthProvider clientId="47820522897-dnqlu5oesrpoq8jp0mptmcgonhjji1n8.apps.googleusercontent.com">
    <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);