import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex items-start justify-center h-screen  ">
      <div className="w-64 flex flex-col gap-3 p-10 bg-red-600 h-screen">
        <h1 className="font-jost font-bold text-4xl text-center">papa</h1>
        <Link to="/dash/profil">profil</Link>
        <Link to="/dash/favory">Favory</Link>
      </div>

      <div className="flex-1  h-screen">
        <Outlet />
      </div>
    </div>
  );
}
