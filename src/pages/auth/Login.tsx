import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { app } from "@/firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const googleLogin = () => {
    signInWithRedirect(auth, provider)
      .then((result: any) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result?.user;

        navigate("/");

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <button onClick={googleLogin}>Login</button>
    </div>
  );
}
