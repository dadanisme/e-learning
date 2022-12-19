import { signOut } from "firebase/auth";
import { app } from "@/firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/auth/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
