import React, { useEffect, useState } from "react";
import { auth, provider } from "../Config";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import Home from "./Home";
import "../components/Login1.css"

function Login1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      setLoggedInUser(userEmail);
      console.log(loggedInUser);
    }
  }, []);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userEmail = result.user.email;
        setEmail(userEmail);
        localStorage.setItem("email", userEmail);
      })
      .catch((error) => {
        console.error("Google Sign In Error:", error);
      });
  };

  const handleEmailSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userEmail = userCredential.user.email;
        setEmail(userEmail);
        localStorage.setItem("email", userEmail);
        console.log(userEmail);
      })
      .catch((error) => {
        console.error("Email Sign In Error:", error);
      });
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setEmail("");
      localStorage.removeItem("email");
    });
  };

  return (
    <div className="layout">
      <div className="image-side"></div> {/* Image side */}
      <div className="form-side"> {/* Form side */}
        {loggedInUser ? (
          <div>
            <Home />
            <button onClick={handleLogout} className="button-google">
              Logout
            </button>
          </div>
        ) : (
          <div className="card">
            <button onClick={handleGoogleSignIn} className="button-google w-full mb-4">
              Sign In With Google
            </button>
            <div className="input-wrapper mb-4">
              <label className="labels-a">Email address</label>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="input-wrapper mb-4">
              <label className="labels-a">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
            </div>
            <label className="forgot-password">Forgot password?</label>
            <div className="flex items-center justify-between mt-4">
              <button onClick={handleEmailSignIn} className="button button-primary">
                Sign In With Email
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Login1;