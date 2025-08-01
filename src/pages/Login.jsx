// src/pages/Login.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Login with:", email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Login Here</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <FaUser className="absolute left-4 top-3.5 text-white opacity-70" />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 pl-10 pr-4 bg-white/20 text-white rounded-lg border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-3.5 text-white opacity-70" />
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 pl-10 pr-4 bg-white/20 text-white rounded-lg border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-indigo-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-white/80">
          Don’t have an account?{" "}
          <Link
            to="/"
            className="text-white font-medium underline hover:text-gray-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
