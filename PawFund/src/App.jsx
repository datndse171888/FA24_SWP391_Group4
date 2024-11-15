import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/authentication/login/login.jsx";
import Home from "./pages/userUI/homepage/homepage.jsx";
import ViewDetail from "./pages/userUI/pet/viewCatDetail.jsx";
import Register from "./pages/authentication/register/register.jsx";
import ViewList from "./pages/userUI/pet/viewCatList.jsx";
import AdoptedList from "./pages/shelterUI/adoptedApplication/adoptedList.jsx";
import Dashboard from "./pages/adminUI/dashboard/dashboard.jsx";
import PostInfo from "./pages/shelterUI/postCatInfo/postInfo.jsx";
import NewsPage from "./pages/userUI/news/newsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="postinfo" element={<PostInfo />} />
        <Route path="viewlist" element={<ViewList />} />
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="catdetail/:id" element={<ViewDetail />} />
        <Route path="newspage" element={<NewsPage />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="adoptedlist" element={<AdoptedList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
