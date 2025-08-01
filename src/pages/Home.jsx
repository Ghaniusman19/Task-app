import React from "react";
import { getAuth, signOut } from "firebase/auth";

function Home() {
  const handleLogout = () => {
    const auth = getAuth(); // ya agar already import hai to use karo
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        navigate("/"); // redirect to login page
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="w-full bg-white text-pink-600 font-bold py-3 rounded-lg border border-pink-600 hover:bg-gray-100 transition duration-300"
      >
        Log Out
      </button>{" "}
    </div>
  );
}

export default Home;
