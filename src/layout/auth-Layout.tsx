import { Outlet, useLocation } from "react-router-dom";
import pin51 from "../assets/pin51.jpg";
import jpg from "../assets/jpg.jpg"


export default function AuthLayout() {
  const location = useLocation();
  const islogin = location.pathname === "/auth/login";
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  ">
      <div className=" md:col-span-2 relative max-w-3xl">

          <img
            src={ islogin ? pin51 : jpg }
            alt=""
            className="w-full h-screen hidden md:flex object-cover overflow-hidden  "
          />
      </div>

      <div className="col-span-1 flex items-center px-5">
        <Outlet />
      </div>
    </div>
  );
}
