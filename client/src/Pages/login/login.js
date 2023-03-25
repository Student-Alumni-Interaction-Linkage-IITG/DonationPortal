import "./login.css";
import passclosed from "../../assets/images/login/passclosed.png";
import passopen from "../../assets/images/login/passopen.png";
import login from "../../assets/images/login/login.png";
import { BrowserRouter as Router } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Checkbox } from "@mui/material";
import google from "../../assets/images/login/google.png";
import facebook from "../../assets/images/login/facebook.png";
import twitter from "../../assets/images/login/twitter.png";
import { useHistory } from "react-router-dom";
import { useState} from "react";
import Loginnavbar from "./Loginnavbar";
import { useLogin } from "../../hooks/useLogin";
import { useGLogin } from "../../hooks/useGLogin";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [designation, setDesignation] = useState("Alumni");
  const [imageSrc, setImageSrc] = useState(passclosed);
  const { login, error, isLoading } = useLogin();
  const {googleLogin} = useGLogin();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setImageSrc((prevSrc) => (prevSrc === passclosed ? passopen : passclosed));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <Router>
      <div className="signbody">
        <Loginnavbar />
        <div className="loginbody">
          <div className="loginleft">
            <div className="loginbox">
              <p className="ltext1">Hello!</p>
              <p className="ltext2">
                Enter your personal details and start journey with us
              </p>
              <br></br>
              <button
                className="lbutton1"
                type="Signup"
                onClick={() => history.push("/signup.js")}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="loginright">
            <p className="ltext3">Log In</p>
            <form className="form" id="login" onSubmit={handleSubmit}>
              <div className="formlogininput">
                <div className="lcontainer">
                  <p className="ltextinside">Login email</p>
                  <input
                    type="email"
                    className="lfield1"
                    id="lusername"
                    value={email}
                    style={{ backgroundImage: `url(${login} )` }}
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
                          value="Alumni"
                          control={<Radio />}
                          label={<p className="signtext">Alumni</p>}
                        />
                        <FormControlLabel
                          value="Admin"
                          control={<Radio />}
                          label={<p className="signtext">Admin</p>}
                        />
                        <FormControlLabel
                          value="GS"
                          control={<Radio />}
                          label={<p className="signtext">GS</p>}
                        />
                        <FormControlLabel
                          value="Others"
                          control={<Radio />}
                          label={<p className="signtext">Others</p>}
                        />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
                <button
                  className="loginbutton"
                  type="login"
                  disabled={isLoading}
                >
                  Log In
                </button>
                {error && <div className="error">{error}</div>}
                <div className="lremember">
                  <FormControlLabel
                    value="remember"
                    control={<Checkbox />}
                    label="Remember Me"
                    labelPlacement="start"
                  />
                </div>
                <div className="ldivider">
                  <div className="ldivide"></div>
                  <p>or login with</p>
                  <div className="ldivide"></div>
                </div>
                <div className="lsocials">
                  <a href="#">
                    <div
                      className="lsmallsocials"
                      onClick={() => googleLogin()}
                      style={{
                        height: "3.2vw",
                        width: "3.2vw",
                        borderRadius: "300px",
                        border: "solid 1px black",
                      }}
                    >
                      <img src={google} />
                    </div>
                  </a>
                  <a href="#">
                    <div
                      className="lsmallsocials"
                      style={{
                        height: "3.2vw",
                        width: "3.2vw",
                        borderRadius: "300px",
                        border: "solid 1px black",
                      }}
                    >
                      <img src={facebook} />
                    </div>
                  </a>
                  <a href="#">
                    <div
                      className="lsmallsocials"
                      style={{
                        height: "3.2vw",
                        width: "3.2vw",
                        borderRadius: "300px",
                        border: "solid 1px black",
                      }}
                    >
                      <img src={twitter} />
                    </div>
                  </a>
                </div>
                <div style={{ display: "flex", padding: "20px" }}>
                  <a
                    href="#"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <p>forgot email or password?</p>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Login;
