import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";


export const useGLogin = () => {

    const [user, setUser] = useState([]);
    const { dispatch } = useAuthContext()


    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log("Login Failed: ", error),
      });

      useEffect(() => {
        if (user) {
          axios
            .get(
              `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
              {
                headers: {
                  Authorization: `Bearer ${user.access_token}`,
                  Accept: "application/json",
                },
              }
            )
            .then((res) => {
              localStorage.setItem('user', JSON.stringify(res.data));
              dispatch({type: 'LOGIN', payload: res.data});
            })
            .catch((err) => console.log(err));
        }
      }, [user]);

      

      return {googleLogin}
}