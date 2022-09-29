import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { Container, Form } from "./RegisterStyles";

export function Register() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    alert("Account Created Successfully");
    localStorage.setItem("Creds", JSON.stringify(data));
    navigate("/login");
  };

  return (
    <Container>
      <div className="cont">
        <div className="cont2">
          <div className="heading">
            <h1>Register</h1>
            <p>Please fill in the fields below:</p>
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
            <div className="input-box">
              <input
                placeholder="First Name"
                required
                name="first_name"
                onChange={handleChange}
                type="text"
                id="customer_name"
              />
            </div>
            <div className="input-box">
              <input
                required
                placeholder="Last name"
                name="last_name"
                onChange={handleChange}
                type="text"
                id="customer_lname"
              />
            </div>
            <div className="input-box">
              <input
                placeholder="Email"
                required
                name="email"
                onChange={handleChange}
                type="email"
                id="customer_email"
              />
            </div>
            <div className="input-box">
              <input
                placeholder="Password"
                required
                name="password"
                onChange={handleChange}
                type="password"
                id="customer_password"
              />
            </div>
            <div className="action-bottom">
              <p>
                <input type="submit" value="Create Account" />
              </p>
              <span>
                Already have an account ?&nbsp;
                <Link to="/login">Login</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
}
