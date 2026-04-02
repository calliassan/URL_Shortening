import { useContext } from "react";
import { Authcontext } from "../context/contextapi";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const auth = useContext(Authcontext);
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
}
