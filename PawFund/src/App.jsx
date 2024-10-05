import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/authentication/login/login.jsx'
import Home from './pages/userUI/homepage/homepage.jsx'
import PetList from './pages/userUI/pet/viewPetList.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="petlist" element={<PetList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
