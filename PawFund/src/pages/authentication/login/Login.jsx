// import React from 'react'
import { useState } from "react";
import api from "../../../config/axios.jsx";
import "./login.css";
import { Stack, Button, Form, Container, Row } from "react-bootstrap";

const Login = () => {
  const [account, setAccount] = useState({
    gmail: "",
    password: "",
  });

  const handleAccountChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // const json = {
      //     "email": account.gmail,
      //     "password": account.password
      // }

      let formData = new FormData();
      formData.append("email", account.gmail);
      formData.append("password", account.password);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      let res = await api.post("/auth/login", formData, config);
      const data = res?.data;
      if (data && data.token) {
        console.log(data.token);
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="container">
    //   <div className="input-form">
    //     <div className="input-field">
    //       <input
    //         className="input-field_input"
    //         type="text"
    //         id="gmail"
    //         name="gmail"
    //         value={account.gmail}
    //         onChange={handleAccountChange}
    //         required
    //       />
    //       <label htmlFor="gmail" className="input-field_label">
    //         Gmail{" "}
    //       </label>
    //     </div>
    //     <div className="input-field">
    //       <input
    //         className="input-field_input"
    //         type="password"
    //         id="password"
    //         name="password"
    //         value={account.password}
    //         onChange={handleAccountChange}
    //         required
    //       />
    //       <label className="input-field_label">Password </label>
    //     </div>
    //     <div className="input-button">
    //       <button onClick={handleLogin}>Submit</button>
    //     </div>
    //   </div>
    // </div>
    <div className="container-login">
      <Container className="input-form col-md-3">
        <Stack gap={1} className="mx-auto input-field my-4">
          <Form.Control
            className="input-field_input"
            type="text"
            id="gmail"
            name="gmail"
            value={account.gmail}
            onChange={handleAccountChange}
            required
          />
          <Form.Label className="input-field_label" htmlFor="gmail">Gmail</Form.Label>
        </Stack>
        <Stack gap={1} className="mx-auto input-field my-4">
          <Form.Control
            className="input-field_input"
            type="password"
            id="password"
            name="password"
            value={account.password}
            onChange={handleAccountChange}
            required
          />
          <Form.Label className="input-field_label" htmlFor="password">Password</Form.Label>
        </Stack>
        <Stack gap={2} className='mx-auto input-button my-4'>
          <Row>
            <Button className='col-5 mx-auto' variant="outline-success" onClick={handleLogin}>Login</Button>
            <Button className='col-5 mx-auto' variant="outline-primary" href="/register">Register</Button>
          </Row>
        </Stack>
      </Container >
    </div>
  );
};

export default Login;
