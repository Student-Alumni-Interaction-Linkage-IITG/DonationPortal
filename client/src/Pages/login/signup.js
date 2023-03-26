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



const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("Alumni");
  const [showPassword, setShowPassword] = useState(false);
  const [imageSrc, setImageSrc] = useState(passclosed);
  const {signup, error, isLoading} = useSignup()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setImageSrc((prevSrc) => (prevSrc === passclosed ? passopen : passclosed));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(name,email,password,designation)
  };

  return (
    <Router>
      <div className="signbody">
        <Loginnavbar />
        <div className="loginbody">
          <div className="loginright">
            <p className="ltext3">Create Account</p>
            <form className="form" id="signup" onSubmit={handleSubmit}>
              <div className="formlogininput">
                <div className="lcontainer">
                  <p className="ltextinside">Name</p>
                  <input
                    type="text"
                    className="lfield1"
                    id="lusername"
                    style={{ backgroundImage: `url(${name} )` }}
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div className="lcontainer">
                  <p className="ltextinside">Email</p>
                  <input
                    type="email"
                    className="lfield1"
                    id="lemail"
                    style={{ backgroundImage: `url(${login})` }}
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="lcontainer">
                  <p className="ltextinside">Password</p>
                  <div style={{ position: "relative" }}>
                    <img
                      src={imageSrc}
                      className="loginpasswordimg"
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                      onClick={togglePasswordVisibility}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="lfieldpass"
                      id="lpassword"
                    />
                  </div>
                </div>
                <div className="lcontainer">
                  <p className="ltextoutside">You are?</p>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Alumni"
                      name="radio-buttons-group"
                      onChange={(e) => setDesignation(e.target.value)}
                    >
                      <div className="loptions">
                        <FormControlLabel
                          className="signoptions"
                          value="Alumni"
                          control={<Radio className="signoptions" />}
                          label={<p className="signtext">Alumni</p>}
                        />
                        <FormControlLabel
                          className="signoptions"
                          value="Admin"
                          control={<Radio className="signoptions" />}
                          label={<p className="signtext">Admin</p>}
                        />
                        <FormControlLabel
                          className="signoptions"
                          value="GS"
                          control={<Radio className="signoptions" />}
                          label={<p className="signtext">GS</p>}
                        />
                        <FormControlLabel
                          className="signoptions"
                          value="Others"
                          control={<Radio className="signoptions" />}
                          label={<p className="signtext">Others</p>}
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="signtermncon">
                  <FormControlLabel
                    control={<BpCheckbox />}
                    label={
                      <p className="signtext" style={{ color: "#565656" }}>
                        Please accept the{" "}
                        <a
                          href="#"
                          style={{ color: "#027F9B", textDecoration: "none" }}
                        >
                          terms of service
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          style={{ color: "#027F9B", textDecoration: "none" }}
                        >
                          privacy policy
                        </a>
                      </p>
                    }
                  />
                </div>
                <button
                  className="loginbutton"
                  type="signup"
                  disabled={isLoading}
                >
                  Create Account
                </button>
                {error && <div className="error">{error}</div> }
              </div>
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

export default Signup;
