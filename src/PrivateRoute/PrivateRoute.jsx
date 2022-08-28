import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function PrivateRoute({ Children }) {
  const [state] = useContext(AppContext);
  if (!state.auth) {
    return <Navigate to="/login" />;
  }
  return Children;
}
export default PrivateRoute;
