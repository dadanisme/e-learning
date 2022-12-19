import { Outlet } from "react-router-dom";
import { app } from "@/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Authentication() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/auth/login");
    }
  }, [loading, isAuthenticated]);

  if (loading) return <div>Authenticating...</div>;

  return (
    <div>
      <div>
        <h1>Authentication</h1>
      </div>
      <Outlet />
    </div>
  );
}
