import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { useHistory } from "react-router-dom";



export const useGLogin = () => {

    const [user, setUser] = useState([]);
    const { dispatch } = useAuthContext()
    const history = useHistory();


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
            const user = {
              token: "",
              user: res.data,
            }
            console.log(res.data);
            const email = res.data.email;
            const name = res.data.name;
            console.log(email,name, "From reacttttt")
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({type: 'LOGIN', payload: user});
            history.push('/');

            //google login database push 
            axios
              .post(
                'http://localhost:8000/api/user/googleLogin',{email,name})
                // {
                //   // method: 'POST',
                //   headers: {'Content-Type': 'application/json'},
                //   body: JSON.stringify({email,name})
                // }
              
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              })      
          })
          .catch((err) => console.log(err));
      }
    }, [user]);

      

    return {googleLogin}
}