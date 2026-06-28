import { Outlet, useLocation } from "react-router-dom";
import pin51 from "../assets/pin51.jpg";
import jpg from "../assets/jpg.jpg"


export default function AuthLayout() {
  const location = useLocation();
  const islogin = location.pathname === "/auth/login";
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  ">
      <div className=" md:col-span-2 relative w-full">

          <img
            src={ islogin ? pin51 : jpg }
            alt=""
            className="w-full h-screen object-cover overflow-hidden  "
          />
      </div>

      <div className="col-span-1 flex items-center px-8">
        <Outlet />
      </div>
    </div>
  );
}
