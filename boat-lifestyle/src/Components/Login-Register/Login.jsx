import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { Container, Form } from "./LoginStyles";
import { useToast } from "@chakra-ui/react";

export function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const credData = JSON.parse(localStorage.getItem("Creds")) || [];
    console.log("credData:", credData);

    if (
      credData.email === credentials.email &&
      credData.password === credentials.password
    ) {
      toast({
        title: `Login Successful`,
        status: "success",
        duration: 1000,
        position: "top",
        isClosable: true,
      });
      localStorage.setItem("LoginCreds", JSON.stringify(credentials));
      navigate("/");
    } else if (credData.length === 0) {
      toast({
        title: `User not registered !!!`,
        status: "error",
        duration: 1000,
        position: "top",
        isClosable: true,
      });
    } else {
      toast({
        title: `Wrong Credentials !!!`,
        status: "error",
        duration: 1000,
        position: "top",
        isClosable: true,
      });
      Form.reset();
    }
  };

  const handlePassword = () => {
    const credData = JSON.parse(localStorage.getItem("Creds")) || [];
    console.log("credData:", credData);

    if (credData.email === credentials.email && credData.password === "") {
      toast({
        title: `Your Password is ${credentials.password}`,
        status: "success",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
      navigate("/");
    } else {
      toast({
        title: `Please Enter Your Email`,
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <div className="cont">
        <div className="cont2">
          <div className="heading">
            <h1>Login</h1>
            <p>Please enter your e-mail and password:</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <div className="socials">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://pnggrid.com/wp-content/uploads/2021/07/Facebook-Logo-Square-768x768.png"
                  alt=""
                />
              </div>
            </div>
            <div className="login-email">
              <input
                name="email"
                placeholder="Email"
                onChange={onChange}
                type="email"
                id="customer_email"
                required
              />
            </div>
            <div className="login-password">
              <div className="text-over-input">
                <input
                  name="password"
                  placeholder="Password"
                  onChange={onChange}
                  type="password"
                  id="customer_password"
                  required
                />
              </div>
              <div onClick={handlePassword} className="forgot-password">
                Forget Password?
              </div>
            </div>
            <div className="action-bottom">
              <p>
                <input type="submit" value="Login" className="btn" />
              </p>
              <div style={{ textAlign: "center", marginLeft: "20px" }}>
                New customer?
                <Link to="/account/register">
                  <span style={{ marginLeft: "20px" }}>Create an account</span>{" "}
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
}
