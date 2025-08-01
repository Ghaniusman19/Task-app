// src/pages/Signup.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Signed up user:", userCredential.user.email);

      // Optional: Force logout so user goes to login page
      await signOut(auth);

      // Navigate to login after signup
      navigate("/login");
    } catch (error) {
      console.log("Signup Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Create an Account{" "}
        </h2>

        <form onSubmit={handleSignup} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-3.5 text-white opacity-70" />
            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 pl-10 pr-4 bg-white/20 text-white rounded-lg border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
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

          {/* Confirm Password Field */}
          <div className="relative">
            <FaLock className="absolute left-4 top-3.5 text-white opacity-70" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full py-3 pl-10 pr-4 bg-white/20 text-white rounded-lg border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-pink-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-white/80">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-white font-medium underline hover:text-gray-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
