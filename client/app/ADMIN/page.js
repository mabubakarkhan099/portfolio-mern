// pages/admin.js
"use client";
// pages/admin.js

import { useState } from "react";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const handleTokenSubmit = (e) => {
    e.preventDefault();
    if (token === "123") {
      router.push('/ADMIN/DASHBOARD', {item1: "khan"})
      
    } else {
      setError("Invalid token. Please try again.");
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleTokenSubmit}>
        <input type="password" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Enter your secret token" />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminPage;
