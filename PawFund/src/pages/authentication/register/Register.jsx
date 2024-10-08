// Register.jsx
import api from "axios";
import { useState } from "react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { TbMoodLookLeft, TbMoodLookRight } from "react-icons/tb";
import "./Register.css";
import NavDropdown from "react-bootstrap/NavDropdown";

const Register = () => {
  const [register, setRegister] = useState({
    gmail: "",
    password: "",
    roleId: "",
    avatar: "",
    name: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: ""
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [role, setRole] = useState("Role");

  const [terms, setTerms] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleRegisterChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  // not handle yet
  const handleRole = (e) => {
    setRole(e.target.text);
  };

  const handleTerms = () => {
    setTerms(!terms);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const json = {
        email: register.gmail,
        password: register.password,
        roleId: register.roleId,
        avatar: register.avatar,
        name: register.name,
        address: register.address,
        dateOfBirth: register.dateOfBirth
      };
      let res = await api.post("register", json);
      if (res.status === 200) {
        console.log("Register success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nevigateInfoPage = () => {
    if (register.password.length < 8) {
      alert("Password must be at least 8 characters");
    }
    if (register.password !== confirmPassword) {
      alert("Password not match");
      return;
    }
    if (terms === false) {
      alert("Please agree to the terms & conditions");
      return;
    }
    if (register.roleId === "") {
      alert("Please choose your role");
      return;
    }
    console.log("Nevigate to info page");
    console.log(register);
  }

  return (
    <div className="register-page">
      <div className="wrapper">
        <div className="form-box register">
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
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
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                onChange={handleRegisterChange}
              />
              {
                showPassword ? 
                <TbMoodLookLeft className="icon" onClick={handleShowPassword} /> : 
                <TbMoodLookRight className="icon" onClick={handleShowPassword} />
              }
            </div>
            <div className="input-box">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                required
                onChange={handleConfirmPasswordChange}
              />
              {
                showPassword ? 
                <TbMoodLookLeft className="icon" onClick={handleShowPassword} /> : 
                <TbMoodLookRight className="icon" onClick={handleShowPassword} />
              }
            </div>
            <div className="forgot-remember">
              <label>
                <input type="checkbox" onChange={handleTerms} /> I agree to the terms & conditions
              </label>
              <NavDropdown title={role} id="basic-nav-dropdown" name='roleId' >
                <NavDropdown.Item
                  style={{ color: "#002795" }}
                  name="roleId"
                  value="4"
                  onClick={handleRole}
                >
                  Donor
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ color: "#002795" }}
                  name="roleId"
                  value="2"
                  onClick={handleRole}
                >
                  Shelter
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ color: "#002795" }}
                  name="roleId"
                  value="3"
                  onClick={handleRole}
                >
                  Adopter
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ color: "#002795" }}
                  name="roleId"
                  value="5"
                  onClick={handleRole}
                >
                  Volunteer
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <button type="submit" onClick={nevigateInfoPage}>Register</button>
            <div className="register-link">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
