import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/authentication/login/login.jsx";
import Home from "./pages/userUI/homepage/homepage.jsx";
import PetList from "./pages/userUI/pet/viewPetList.jsx";
import ViewPetDetail from "./pages/userUI/pet/viewPetDetail.jsx";
import Register from "./pages/authentication/register/register.jsx";
import ViewPetList from "./pages/userUI/pet/viewPetList.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="viewlist" element={<ViewPetList />} />
        <Route path="catdetail" element={<ViewPetDetail />} />
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="petlist" element={<PetList />} />
        <Route path="catdetail" element={<ViewPetDetail />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
