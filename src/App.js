import { Fade } from "react-awesome-reveal";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Navbar } from "./components";

function App() {
  return (
    <Fade cascade>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/singup" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Fade>
  );
}

export default App;
