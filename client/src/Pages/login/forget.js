import "./login.css";
import passclosed from "../../assets/images/login/passclosed.png";
import passopen from "../../assets/images/login/passopen.png";
import login from "../../assets/images/login/login.png";
import name from "../../assets/images/login/name.png";
import { BrowserRouter as Router } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Loginnavbar from "./Loginnavbar";
import { useSignup } from "../../hooks/useSignup";
const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 25,
  height: 25,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#027F9B",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 25,
    height: 25,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpCheckbox() {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
    />
  );
}



const Forget = () => {
  const history = useHistory();
//   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [designation, setDesignation] = useState("Alumni");
  const [message , setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [imageSrc, setImageSrc] = useState(passclosed);
//   const {signup, error, isLoading} = useSignup()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setImageSrc((prevSrc) => (prevSrc === passclosed ? passopen : passclosed));
  };

  const handleSubmit = async (e) => {
    console.log("aditya gupta");
    e.preventDefault();
    fetch("http://localhost:8000/api/user/forget-password", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        // title: "foo",
        // body: "bar",
        // userId: 1
        email: email
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then((response) => response.json())
  .then((data)=>{
    setMessage(data.msg);
    console.log(data);
  }).catch((err)=>{
    setMessage(err.msg);
    console.log(err.message);
  })
    // await signup(name,email,password,designation)
  };

  return (
    <Router>
      <div className="signbody">
        <Loginnavbar />
        <div className="loginbody">
          <div className="loginright">
            <p className="ltext4">Get Reset Password Link on Mail </p>
            <br/>
            <form  id="signup" onSubmit={handleSubmit}>
                <p className="ltextinside">Email ID</p>
                <input
                    type="text"
                    className="lfield10"
                    id="lusername"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
              <p className="mess">{message}</p>
              <br/>
              <button
                  className="loginbutton"
                  type="signup"
                  onClick={handleSubmit}
                >
                  Send Mail
                </button>
            </form>
          </div>
          <div className="loginleft">
            <div className="loginbox">
              <p className="ltext1">Welcome Back!</p>
              <p className="ltext2">
                To keep connected with us please login with your details
              </p>
              <br></br>
              <button
                className="lbutton1"
                type="Signup"
                onClick={() => history.push("/login.js")}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Forget;
