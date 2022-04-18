import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../../firebase.int";

const RequiredAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  if (!user && !loading) {
    return <Navigate to={`/login`} replace state={{ from: location }} />;
  }

  return children;
};

export default RequiredAuth;
