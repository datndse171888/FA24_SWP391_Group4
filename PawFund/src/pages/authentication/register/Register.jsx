// Register.jsx
import api from "axios";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { TbMoodLookLeft, TbMoodLookRight } from "react-icons/tb";
import "./register.css";
import { Dropdown, NavDropdown, DropdownButton } from "react-bootstrap";

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
    phoneNumber: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [role, setRole] = useState("Choose your role");

  const [terms, setTerms] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [action, setAction] = useState("");

  const [gender, setGender] = useState("Choose your gender");

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
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.innerText);
    handleRegisterChange(e);
  };

  const handleTerms = () => {
    setTerms(!terms);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const json = {
        gmail: register.gmail,
        password: register.password,
        roleId: register.roleId,
        avatar: register.avatar,
        name: register.name,
        address: register.address,
        dateOfBirth: register.dateOfBirth,
        gender: register.gender,
        phoneNumber: register.phoneNumber,
      };

      let res = await api.post("/register", json);
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
      return;
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
    setAction("active");
  };

  const registerLink = () => {
    setAction("");
  };

  const handleGender = (e) => {
    setGender(e.target.innerText);
    handleRegisterChange(e);
  };

  const ValidateForm = () => {
    if (register.password.length < 10) {
      alert("Phone number must be at least 10 digits");
      return;
    }
    if (register.gender === "") {
      alert("Please choose at least one!!!");
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = ValidateForm();
    if (isValid) {
      console.log("Form submit", register);
    } else {
      console.log("Form date failed");
    }
  };

  return (
    <div className="register-page">
      <div className={`wrapper ${action}`}>
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

              {showPassword ? (
                <TbMoodLookLeft className="icon" onClick={handleShowPassword} />
              ) : (
                <TbMoodLookRight
                  className="icon"
                  onClick={handleShowPassword}
                />
              )}
            </div>
            <div className="input-box">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                required
                onChange={handleConfirmPasswordChange}
              />

              {showPassword ? (
                <TbMoodLookLeft className="icon" onClick={handleShowPassword} />
              ) : (
                <TbMoodLookRight
                  className="icon"
                  onClick={handleShowPassword}
                />
              )}
            </div>
            <div className="input-box ">
              <DropdownButton
                id="dropdown-item-button"
                title={role}
                onClick={handleRole}
              >
                <Dropdown.Item
                  className="px-2 dropdown-item"
                  name="roleId"
                  value="2"
                  as="button"
                >
                  Shelter
                </Dropdown.Item>
                <Dropdown.Item
                  className="px-2 dropdown-item"
                  name="roleId"
                  value="3"
                  as="button"
                >
                  Adopter
                </Dropdown.Item>
                <Dropdown.Item
                  className="px-2 dropdown-item"
                  name="roleId"
                  value="4"
                  as="button"
                >
                  Donor
                </Dropdown.Item>
                <Dropdown.Item
                  className="px-2 dropdown-item"
                  name="roleId"
                  value="5"
                  as="button"
                >
                  Volunteer
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="forgot-remember">
              <label>
                <input type="checkbox" onChange={handleTerms} /> I agree to the
                terms & conditions
              </label>
            </div>
            <button type="submit" onClick={nevigateInfoPage}>
              Continue
            </button>
            <div className="register-link">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>

        {/* --------------------- INFORMATION FORM ---------------------------- */}
        <div className="form-box information">
          <form onSubmit={handleRegister}>
            <h1>Information</h1>
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Username"
                onChange={handleRegisterChange}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={handleRegisterChange}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                required
                onChange={handleRegisterChange}
              />
            </div>
            <div className="input-box">
              <input
                type="date"
                name="dateOfBirth"
                placeholder="Date Of Birth"
                onChange={handleRegisterChange}
              />
            </div>
            <div className="input-box">
              <DropdownButton
                id="dropdown-item-button"
                title={gender}
                onClick={handleGender}
              >
                <Dropdown.Item
                  className="px-2 dropdown-item"
                  name="roleId"
                  value="1"
                  as="button"
                >
                  Female
                </Dropdown.Item>
                <Dropdown.Item
                  className="px-2 dropdown-item"
                  name="roleId"
                  value="2"
                  as="button"
                >
                  Male
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <button type="submit" onClick={handleSubmit}>
              Register
            </button>
            <div className="register-link">
              <p>
                Something wrong?
                <a onClick={registerLink}>Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
