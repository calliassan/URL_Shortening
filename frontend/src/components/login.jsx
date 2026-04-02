import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../serviceapi/api";
import { useContext } from "react";
import { Authcontext } from "../context/contextapi";

export function Login() {
  const navigate = useNavigate();
  const { login } = useContext(Authcontext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resdata = await api.post("user/login", {
        email: form.email,
        password: form.password,
      });
      if (resdata.status === 200) {
        login(resdata.data);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response?.data?.message);
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
