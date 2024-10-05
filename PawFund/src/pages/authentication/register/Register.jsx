// Register.jsx
import api from "axios";
import { useState } from "react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import "./Register.css";
import NavDropdown from "react-bootstrap/NavDropdown";

const Register = () => {
  const [register, setRegister] = useState({
    gmail: "",
    password: "",
    roleName: "",
    avatar: "",
    name: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
  });

  const handleRegisterChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const json = {
        email: register.gmail,
        password: register.password,
        roleName: register.roleName,
        avatar: register.avatar,
        name: register.name,
        address: register.address,
        dateOfBirth: register.dateOfBirth,
      };
      let res = await api.post("register", json);
      if (res.status === 200) {
        console.log("Register success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-page">
      <div className="wrapper">
        <div className="form-box register">
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Username"
                required
                onChange={handleRegisterChange}
              />
              <FaUserAlt className="icon" />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="gmail"
                placeholder="Email"
                required
                onChange={handleRegisterChange}
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleRegisterChange}
              />
              <FaLock className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
                onChange={handleRegisterChange}
              />
              <FaLock className="icon" />
            </div>
            <div className="forgot-remember">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
              <label>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    style={{ color: "#002795" }}
                    href="#action/3.1"
                  >
                    Donor
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    style={{ color: "#002795" }}
                    href="#action/3.2"
                  >
                    Shelter
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    style={{ color: "#002795" }}
                    href="#action/3.3"
                  >
                    Adopter
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    style={{ color: "#002795" }}
                    href="#action/3.4"
                  >
                    Volunteer
                  </NavDropdown.Item>
                </NavDropdown>
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have an account? <a href="#">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
