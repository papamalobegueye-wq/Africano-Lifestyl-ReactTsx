import { Outlet, useLocation } from "react-router-dom";
import aaa from "../assets/aaa.jpg";
import aaa2 from "../assets/aaa2.jpg"


export default function AuthLayout() {
  const location = useLocation();
  const islogin = location.pathname === "/auth/login";
  return (
    <div className="grid grid-cols-2 gap-5">
      <img
        src={islogin ? aaa : aaa2}
        alt=""
        className="w-full h-screen object-cover"
      />

      <div className="flex-1 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
