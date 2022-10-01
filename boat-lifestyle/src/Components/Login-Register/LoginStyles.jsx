import styled from "styled-components";

export const Container = styled.div`
  height: 505px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 30px;
  color: black !important;

  input {
    background-color: white;
    border-radius: 5px;
    color: black;
  }
  a {
    color: #ea2127 !important;
    font-weight: 500;
    text-decoration: underline;
  }

  .cont {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
  }

  .cont2 {
    margin-left: auto;
    margin-right: auto;
    width: 420px;
    max-width: 100%;
    margin-top: 30px;
  }

  .heading {
    margin: 10px 0px 40px;
  }

  .heading > h1 {
    text-align: center;
    margin: 0 0 10px;
    font-weight: 600;
    font-size: 30px;
    line-height: 1.2em;
  }
`;

export const Form = styled.form`
  .socials {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .socials div {
    margin: 5px;
  }
  .socials img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin: auto;
    display: block;
  }

  .login-email,
  .login-password {
    margin-bottom: 20px;
    height: 52px;
    width: 452px;
  }

  .login-email > input {
    width: 100%;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid #d8d8d8;
    padding: 11px 15px;
    vertical-align: middle;
    max-width: 100%;
    box-sizing: border-box;
  }

  .text-over-input {
    position: relative;
    display: block;
  }

  .text-over-input > input {
    width: 100%;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid #d8d8d8;
    padding: 11px 15px;
    vertical-align: middle;
    max-width: 100%;
  }

  .forgot-password {
    position: absolute;
    top: 34.5%;
    right: 34.5%;
    line-height: 1em;
    font-size: 12.8px;
    text-decoration: none;
  }

  .forgot-password:hover {
    cursor: pointer;
    color: red;
    text-decoration: underline;
    background-color: transparent;
  }

  input:focus {
    border-color: #000;
  }

  .action-bottom {
    margin-top: 27px;
    width: 452px;
    height: 52px;
  }

  .action-bottom > p {
    margin-bottom: 1em;
    font-weight: 500;
  }

  .action-bottom > p > input {
    font-weight: 500;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    background: red;
    border: 1px solid red;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 1em;
    height: auto;
    margin: 0;
    padding: 11px 25px;
    vertical-align: middle;
    text-align: center;
    color: white;
  }
`;
