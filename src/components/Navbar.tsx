import { LuShoppingBag } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import logoEcomVanguard from "../assets/logoEcomVanguard.jpg";
import { MenuLists } from "../data/menuLists";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 mb-5 pt-1.5 md:pt-5">
      <div className="h-6 md:h-10">
        <img
          src={logoEcomVanguard}
          alt="logo"
          className="h-full object-contain"
        />
      </div>

      <ul className="flex gap-2 md:gap-8 text-sm font-medium list-none">
        {MenuLists.map((menu, index) => (
          <li key={index} className="cursor-pointer hover:text-gray-500">
            <Link to={menu.link}>{menu.name}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 md:gap-4">
        <CiSearch
          fontSize={22}
          className="cursor-pointer hover:text-gray-500"
        />
        <MdOutlineFavoriteBorder
          fontSize={22}
          className="cursor-pointer hover:text-gray-500"
        />
        <LuShoppingBag
          fontSize={18}
          className="cursor-pointer hover:text-gray-500"
        />
        <Link to="/auth/login">
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-gray-800">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}
