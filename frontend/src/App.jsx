import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/login";
import Register from "./components/register";
import { Dashboard } from "./components/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
