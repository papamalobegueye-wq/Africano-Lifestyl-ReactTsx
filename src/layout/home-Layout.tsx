import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomeLayout() {
  return (
    <div className="m-5">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}
