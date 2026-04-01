import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../serviceapi/api";

function Register() {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [Error, setError] = useState("");
  const handlechange = (e) => {
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const regdata = await api.post(`user/register`, {
        name: formdata.username,
        email: formdata.email,
        password: formdata.password,
      });
      if (regdata.status === 200 || regdata.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      if (error.response.data.message.includes("exists")) {
        navigate("/login");
      } else {
        setError(error.response?.data?.message || "Registration failed");
      }
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="enter text"
          name="username"
          value={formdata.username}
          onChange={handlechange}
        />
        <input
          type="email"
          placeholder="enter email"
          name="email"
          value={formdata.email}
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={formdata.password}
          onChange={handlechange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Register;
