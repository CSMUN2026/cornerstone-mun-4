"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import AdminSidebar from "../../components/AdminSidebar";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("csmun-admin");

    if (!auth) {
      router.push("/hidden-admin");
    }
  }, [router]);

  return (
    <main className="flex min-h-screen bg-black text-white">

      <AdminSidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold text-yellow-400">
          CSMUN 4.0 Dashboard
        </h1>

        <p className="mt-3 text-gray-400">
          Welcome Administrator
        </p>

      </div>

    </main>
  );
}