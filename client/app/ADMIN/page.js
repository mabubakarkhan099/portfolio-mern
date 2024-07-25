"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./dashboard.scss";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AdminPage = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const handleTokenSubmit = (e) => {
    e.preventDefault();
    if (token === "1234") {
      router.push('/ADMIN/DASHBOARD?token=1234');
    } else {
      setError("Invalid token. Please try again.");
    }
  };

  return (
    <section className="admin-section min-h-screen flex justify-center items-center">
      <div className="container py-7 flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl bg-opacity-40 mobile:w-full sm:w-1/2 lg:w-3/12">
          <h1 className="text-3xl fw-bold text-orange-400 py-5 text-center">Login</h1>
          <form onSubmit={handleTokenSubmit} className="grid gap-5">
            <Input type="password" placeholder="Enter your secret token" value={token} onChange={(e) => setToken(e.target.value)} autocomplete={false} />
            <Button type="submit">Submit</Button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default AdminPage;
