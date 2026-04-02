import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const Authcontext = createContext();
export function Authprovider({ children }) {
  const [auth, setauth] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setauth({ token });
    }
  }, []);

  const login = (data) => {
    localStorage.setItem("token", data.token);
    setauth({ token: data.token, user: data.user });
  };
  const logout = () => {
    localStorage.removeItem("token");
    setauth(null);
  };

  return (
    <Authcontext.Provider value={{ login, auth, logout }}>
      {children}
    </Authcontext.Provider>
  );
}
