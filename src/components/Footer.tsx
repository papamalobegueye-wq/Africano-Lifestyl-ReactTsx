import { BsFillGeoAltFill } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { MyFooter } from "../data/footers";
import { FaCcMastercard, FaCcVisa, FaFacebookF, FaGooglePay, FaInstagram, FaLongArrowAltRight, FaPiedPiperPp, FaTwitter } from "react-icons/fa";
import { GrAmex } from "react-icons/gr";

export default function Footer() {
  return (
    <section className="w-full bg-slate-900 mt-10">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 py-4 max-w-6xl mx-auto text-slate-200">
        {/* SECTION LOGO */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl md:w-2xl font-jost text-white font-bold uppercase">
            Africano Lifestyl'
          </h1>

          <div className="flex items-center gap-3">
            <FiPhoneCall size={20} />
            <button className="text-sm">(+221) 786309502</button>
          </div>

          <div className="flex gap-3">
            <FiMail size={20} className="mt-0.5" />
            <button className="text-sm">PapaDeveloppeur@gmail.com</button>
          </div>

          <div className="flex gap-3">
            <BsFillGeoAltFill size={20} className="mt-0.5" />
            <button>11000, Dakar</button>
          </div>
        </div>

        {/* section INFORMATION & SERVICE */}
        {MyFooter.map((section) => {
          const { title, links } = section;
          return (
            <div key={title} className="flex flex-col gap-4">
              <h3 className="font-jost font-semibold text-base uppercase">
                {title}
              </h3>

              <div className="flex flex-col gap-2">
                {links.map((linkItem) => {
                  const { label, url } = linkItem;
                  return (
                    <a key={label} href={url}>
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* SECTION SUBCRIBE */}
        <div className="flex flex-col gap-4">
          <h3 className="font-jost font-semibold text-base uppercase">
            SUBCRIBE
          </h3>

          <p className=" text-xs">
            Enter your email below to be the first to know <br /> about new
            collection and product launches
          </p>

          <button className="border border-slate-300 w-full shadow-xl rounded-sm py-2 flex items-center justify-start gap-2">
            <span>
              <FiMail size={20} className="ml-2" />
            </span>
            Your Email
            <span className=" ml-25">
              <FaLongArrowAltRight />
            </span>
          </button>
        </div>
      </div>

      <div className="border-t-1 border-slate-300 mt-5 py-2 hidden md:px-4 md:block
      gap-8  max-w-5xl mx-auto text-slate-200 w-full grid grid-col-1 md:grid-col-3">
        <div className="  md:flex md:items-center md:justify-between gap-20">
          <div className="block w-10 md:flex gap-2">
            <div className=" rounded-xl"><FaCcVisa size={28} /> </div>
            <div className=" rounded-xl"> <FaCcMastercard size={28} /> </div>
            <div className=" rounded-xl"> <FaGooglePay size={28} /> </div>
            <div className=" rounded-xl"> <GrAmex size={28} /> </div>
            <div className=" rounded-xl"><FaPiedPiperPp size={28} /> </div>
          </div>

          <div>
            <p>@ 2026 Lifestyl' All Right are reserved</p>
          </div>

          <div className="flex gap-2">
            <div className=" rounded-xl"><FaFacebookF size={22} /></div>
            <div className=" rounded-xl"><FaInstagram size={22} /> </div>
            <div className=" rounded-xl"><FaTwitter size={22} /> </div>
          </div>

        </div>

      </div>
    </section>
  );
}
