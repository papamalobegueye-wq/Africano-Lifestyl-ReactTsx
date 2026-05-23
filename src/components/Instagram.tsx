import { Instagrams } from "../data/instagrams"
import { IgEngagements } from "../data/igEngagements"


export default function InstagramCompponent() {



  return (
    <section className="w-full py-16 ">
        <div className="flex items-center justify-center text-3xl md:text-4xl 
        font-jost font-semibold">
            <h2>Our Instagram Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-10">
            {Instagrams.map((item) => 
            <div key={item.id} className="relative overflow-hidden 
            rounded-xl group cursor-pointer h-80 object-cover">
                <img src={item.image} alt="" />
            </div>
        )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {IgEngagements.map((item) => {
                const IconComponent = item.icon
                return (
                    <div key={item.id} className="flex flex-col items-start gap-2 m-10">
                        <div className="text-2xl text-slate-800">
                            <IconComponent size={28}/>
                        </div>
                        <h4 className="font-jost font-semibold text-slate-800 text-base mt-2">
                            {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                )
            })}
        </div>


    </section>
  )
}
