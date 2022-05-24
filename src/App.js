import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ErrorPage from "./Pages/Error/ErrorPage";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/Log/LogIn";
import Register from "./Pages/Log/Register";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import Tools from "./Pages/Tools/Tools";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/portfolio" element={<MyPortfolio />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/tools" element={<Tools />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
