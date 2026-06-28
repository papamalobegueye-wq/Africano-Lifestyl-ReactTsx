import { FaLongArrowAltRight } from "react-icons/fa";
import pin27 from "../assets/pin27.jpg";
import { Link } from "react-router-dom";
export default function Hero() {
    return (
        <div className="bg-[#b2b2b2] flex flex-col md:flex-row items-center justify-center w-full mx-auto 
        gap-8 font-jost hoverflow-hidden relative pt-5 md:p-0">
            
            <div className="flex flex-col md:gap-4 gap-1 text-center md:text-left">
                <p className="text-3xl ">Classic Exclusive</p>
                <h1 className="text-6xl  font-bold">Man's Collection</h1>
                <p className="">UPTO 40% OFF</p>
                <Link to={`/shop/`}>
                <button className=" md:italic flex items-center gap-2 bg-black text-white px-7 
                py-3 rounded-xl text-sm font-medium cursor-pointer w-fit mx-auto mt-3 md:mt-3 md:mx-0 md:shadow-2xl
                 md:shadow-olive-500 transition-all duration-300 hover:bg-gray-800 hover:scale-105">
                    Shop Now <FaLongArrowAltRight />
                </button></Link>
                <p className="hidden md:block absolute z-10 text-[155px] font-bold uppercase tracking-[15px] 
                text-[#c8c8c8] whitespace-nowrap pointer-events-none opacity-60 select-none mt-65 left-[10%] 
                italic h-40 -translate-y-1/2 italic">
                best selle</p>

            </div>

            <div className="relative flex items-center justify-center">
                
                <div className="relative hidden md:block z-11 w-74 h-74 md:w-120 md:h-120 bg-cover bg-center "
                    style={{ backgroundImage: `url(${pin27})` }}
                />
            </div>

        </div>
    );
}