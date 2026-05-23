import { type Deal } from "../types/deal";
import pin23 from "../assets/pin23.jpg";
import { useState, useEffect } from "react";

export default function Deal() {
  // N'oublie pas d'importer useState et useEffect en haut de ton fichier
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Ici tu colles le bloc useEffect avec le setInterval que je t'ai fourni
  useEffect(() => {
    // Fixe une date de fin (ex: dans 15 jours)
    const targetDate = new Date("2026-06-01T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="deal-card w-full p-5 mt-15 gap-10">
      <div
        className=" flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto 
                gap-8 font-jost hoverflow-hidden relative pt-5 md:p-0"
      >
        <div className="flex flex-col md:gap-4 gap-2 text-center md:text-left w-full md:w-auto">
          <h2 className="font-jost font-semibold text-3xl md:text-4xl">
            Deals of the Month
          </h2>

          <p className="w-full md:w-120 text-sm font-jost">
            Pourquoi choisir entre tradition et modernité quand on peut incarner
            les deux ? Notre nouvelle collection célèbre l’homme d'influence,
            celui qui respecte ses racines tout en imposant sa propre vision du
            futur.
          </p>

          <div className="flex gap-4 mt-8">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-20 h-20 bg-white shadow-lg rounded-xl border border-slate-100"
              >
                <span className="text-2xl font-bold font-jost text-slate-800">
                  {item.value.toString().padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div>
            <button className="font-jost m-4 md:mt-2  bg-black text-white w-40 rounded-lg hover:bg-gray-800 py-2">
              View All Products
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full md:w-auto">
          <img
            src={pin23}
            alt="Deal"
            className="w-full max-w-sm md:w-96 h-auto md:h-110 bg-cover bg-center"
          />
        </div>
      </div>
    </section>
  );
}
