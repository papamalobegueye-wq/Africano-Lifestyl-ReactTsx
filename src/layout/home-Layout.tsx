import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <div className="bg-black font-jost font-bold w-full h-100 flex items-center justify-center text-white text-2xl ">
        FOOTER
      </div>
    </div>
  );
}
